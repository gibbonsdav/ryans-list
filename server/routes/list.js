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

    router.get("/category/:slug", (req, rest, next) => {
      const slug = req.params.slug
      const sql = `SELECT p.id, p.name, p.posting, p.time_created FROM posts p LEFT JOIN categories c ON p.category_id = c.id WHERE c.slug = ? ORDER BY p.time_created DESC LIMIT 50`

      conn.query(
        "SELECT name FROM categories WHERE slug = ?",
        [slug],
        (err1, results1, fields1) => {
          conn.query(sql, [slug], (err, results, fields) => {
            const categoryName = results1[0].name
            res.json({
              catName: categoryName,
              posts: results
            })
          })
        }
      )
    })

    res.json(categories)
  })
})
module.exports = router
