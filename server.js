const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/bookRoutes.js");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const connectDB = require("./config.js");

connectDB();
app.use(express.json());
app.use(cors());

app.use("/api", bookRoutes.router);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
