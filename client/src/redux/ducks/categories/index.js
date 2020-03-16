import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_CATS = "cats/GET_CATS"
const GET = "cats/GET"
const GET_CURRENT = "cats/GET_CURRENT"

const initialState = {
  categories: [],
  current: "",
  posts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATS:
      return { ...state, categories: action.payload }
    default:
      return state
  }
}

function getCats() {
  return dispatch => {
    axios.get("/api/categories").then(resp => {
      const data = resp.data
      dispatch({
        type: GET_CATS,
        payload: data
      })
    })
  }
}

function getCurrent(slug) {
  return dispatch => {
    axios.get("/api/category/" + slug).then(resp => {
      console.log(resp.data)

      dispatch({
        type: GET_CURRENT,
        payload: {
          category: resp.data.catName,
          posts: resp.data.posts
        }
      })
    })
  }
}

export function useCats() {
  const dispatch = useDispatch()
  const categories = useSelector(appState => appState.catState.categories)
  const get = () => dispatch(getCats())
  const getPosts = slug => dispatch(getCurrent(slug))
  const currentCategory = useSelector(appState => appState.catState.current)
  const posts = useSelector(appState => appState.catState.posts)

  return { categories, get, getPosts, posts, currentCategory }
}
