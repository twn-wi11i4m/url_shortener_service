# URL Shortener Service

![Node.js](https://a11ybadges.com/badge?logo=nodedotjs)
![PostgreSQL](https://a11ybadges.com/badge?logo=postgresql)

API to create short URLs using Node, Express, and PostgreSQL.

## Quick Start

```bash
# Install the dependencies
npm install

# Edit the default.json file with your PostgreSQL credentials

# Start the server
npm start
```

> Ensure you have PostgreSQL installed and running on your machine. Run `config/create_db.sql` to create the database and the table.

## Endpoint

To create a short URL, make a POST request to the `/api/url/shorten` endpoint with the following request body:

```json
{
  "url": "https://www.example.com"
}
```

## Flow Diagram

![Flow Diagram](./docs/flow_diagram.svg)

## Usage

### cURL

```bash
curl -X POST http://localhost:5000/api/url/shorten -H "Content-Type: application/json" -d '{"url": "https://www.example.com"}'
```

### Python

```python
import requests
url = "http://localhost:5000/api/url/shorten"
payload = {"url": "https://www.example.com"}
response = requests.post(url, json=payload)
print(response.json())
```

### JavaScript

```javascript
const axios = require("axios");
const url = "http://localhost:5000/api/url/shorten";
const payload = { url: "https://www.example.com" };
axios
  .post(url, payload)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```
