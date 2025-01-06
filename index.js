const express = require("express");
const { connectDB } = require("./config/connect_db");

const app = express();

// Connect to database
connectDB();

app.use(express.json());

// Define Routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/shorten_url"));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
