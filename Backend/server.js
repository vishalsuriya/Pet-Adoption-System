const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./connection"); 
const Pets = require("./Schemas/PetSchema"); 
const Adopt = require("../Backend/Schemas/AdoptSchema");
connectDB();
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/adopts', async (req, res) => {
  try {
    const newAdopt = new Adopt({
      ...req.body  
    });

    const savedAdopt = await newAdopt.save();  
    res.status(200).json(savedAdopt);  
  } catch (err) {
    console.error('Error:', err);  
    res.status(500).send('Internal Server Error');
}
});

app.post('/api/pets', async (req, res) => {
  try {
    const newPet = new Pets({
      ...req.body
    });
    const savedPet = await newPet.save();
    res.status(200).json(savedPet);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
  }
});

 app.get('/api/petdata',async(req,res)=>{
  const data = await Pets.find();
  res.send(data);
 })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

