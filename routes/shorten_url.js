const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortid = require("shortid");
const config = require("config");
const { client } = require("../config/connect_db");

// @route POST /api/url/shorten
// @desc Create short URL
router.post("/shorten", async (req, res) => {
  const { url } = req.body;
  const baseUrl = config.get("baseUrl");

  // Check base url
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json("Invalid base URL");
  }

  // Create url code
  const urlCode = shortid.generate();

  // Check long url
  if (validUrl.isUri(url)) {
    try {
      // SQL query to find the long URL
      const findQuery = `SELECT * FROM urls WHERE long_url = $1`;

      let res_url = await client.query(findQuery, [url]);

      if (res_url.rows.length > 0) {
        res.json(res_url.rows[0]);
      } else {
        // Create short url
        const shortUrl = baseUrl + "/" + urlCode;

        // SQL query to insert the new URL
        const insertQuery = `INSERT INTO urls (url_code, long_url, short_url) VALUES ($1, $2, $3) RETURNING *`;

        res_url = await client.query(insertQuery, [urlCode, url, shortUrl]);

        res.json(res_url.rows[0]);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).json("Server error");
    }
  }
});

module.exports = router;
