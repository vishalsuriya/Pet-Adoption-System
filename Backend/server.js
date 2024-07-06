const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const { ObjectId } = require("mongodb"); // Import ObjectId from mongodb
const connectDB = require("./connection");
const Pets = require("./Schemas/PetSchema");
const Adopt = require("./Schemas/AdoptSchema");

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

app.get('/api/petdata', async (req, res) => {
  try {
    const data = await Pets.find();
    res.status(200).json(data);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.delete('/api/pets/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Pets.deleteOne({ _id: new ObjectId(id) }); 
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Pet not found' });
    }
    res.status(200).json({ message: 'Pet deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
