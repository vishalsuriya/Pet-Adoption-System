const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const { ObjectId } = require("mongodb"); 
const connectDB = require("./connection");
const Pets = require("./Schemas/PetSchema");
const Adopt = require("./Schemas/AdoptSchema");
const Admin = require("./Schemas/AdminSchema")
const Users = require("./Schemas/UserSchema");
const bcrypt = require("bcrypt");
const saltRounds =10;
connectDB();
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "https://petpalsconnect.netlify.app",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/users', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);

    const newUser = new Users({
      username,
      email,
      password: hash
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser); 
  } catch (err) {
    res.status(500).send('Internal server error');
  }
});

app.post('/api/users/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    res.status(200).json({ success: true, user });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Internal server error');
  }
});


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


app.get('/api/admin', async(req,res)=>{

  try {
    const data = await Admin.find();
    res.status(200).send(data);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Database error' });
  }
});
app.put('/api/pets/update/:id', async (req, res) => {
  try {
    const updatedPet = await Pets.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
