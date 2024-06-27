const express = require("express");
const dotenv = require("dotenv");
const dogModel  = require('./Schemas/DogSchema')
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("../Backend/connection");
dotenv.config();
app.use(express.json());
connectDB();
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;


app.get('/dog-details', async(req,res)=>{
  const data = await dogModel.find()
  res.send(data)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

