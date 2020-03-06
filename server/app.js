const express = require("express")
const catRoutes = require("./routes/list")

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", catRoutes)

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
