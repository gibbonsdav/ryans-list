const express = require("express")
const catRoutes = require("./routes/list")
const postRoutes = require("./routes/posts")

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", catRoutes)
app.use("/api", postRoutes)

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
