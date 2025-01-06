const express = require("express");
const routes = express.Router();
const { client } = require("../config/connect_db");

// @route GET /:code
// @desc Redirect to long/original URL
routes.get("/:code", async (req, res) => {
  try {
    // SQL query to find the URL by code
    const findQuery = `SELECT * FROM urls WHERE url_code = $1`;

    let url = await client.query(findQuery, [req.params.code]);
    url = url.rows[0];

    // Redirect to long URL
    if (url) {
      return res.redirect(url.long_url);
    }
    return res.status(404).json("No URL found");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = routes;
