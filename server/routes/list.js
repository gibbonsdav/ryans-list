const express = require("express")
const router = express.Router()
const conn = require("../db")
const data = {
  categories: []
}
router.get("/categories", (req, res, next) => {
  const sql = `SELECT * FROM categories`
  conn.query(sql, (err, results, fields) => {
    console.log(results)

    const categories = results
      .filter(category => {
        return category.parent_id === null
      })
      .map(main => {
        return {
          ...main,
          sub: results.filter(subcat => {
            return subcat.parent_id == main.id
          })
        }
      })

    res.json(categories)
  })
})
module.exports = router
