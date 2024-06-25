const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("../Backend/connection");
dotenv.config();
app.use(express.json());
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });