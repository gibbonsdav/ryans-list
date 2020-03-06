import React from "react"
import Home from "./Home"
import { BrowserRouter as Router, Route } from "react-router-dom"

export default props => {
  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  )
}
