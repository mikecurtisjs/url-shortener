const connectDB = require("./server/config/db");
const express = require("express");
const app = express();
require("dotenv").config();

// Connect to database
connectDB();

// Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/", require("./server/routes/index"));
app.use("/api/url", require("./server/routes//url"));

app.listen(process.env.PORT, () => {
  console.log("Server Started");
});
