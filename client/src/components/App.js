import React from "react"
import Home from "./Home"
import { BrowserRouter as Router, Route } from "react-router-dom"

// import Category from "./Category"
// import Post from "./Post"
// import CreatePost from "./CreatePost"

export default props => {
  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/posting/:id" component={Post} /> */}
      </div>
    </Router>
  )
}
