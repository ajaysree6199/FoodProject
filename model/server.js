var mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const user=require('./model')
// const foodItems=require('./model2')
const foodItem = require('./model2.js');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });


app.post('/register', async (req, res) => {
  try {
      const { username, password , email } = req.body;

      const existingUser = await user.findOne({ username });
      if (existingUser) {
          return res.status(400).json({ message: 'Username already exists' });
      }

      const newUser = new user({ username, password , email});
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  try {
      const { username, password } = req.body;

      const foundUser = await user.findOne({ username, password });
      if (!foundUser) {
        // console.log(message)
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      res.status(200).json({ message: 'Login successful' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
});




//******************************************************* */
//food
app.post('/foodItems', async (req, res) => {
  try {
    const { name, price } = req.body;
    const newFoodItem = new foodItem({ name, price });
    await newFoodItem.save();
    res.status(201).json({ message: 'Food item added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to get all food items
app.get('/foodItems', async (req, res) => {
  try {
    const foodItems = await foodItem.find();
    res.status(200).json(foodItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});








// Define User schema and model for registration
// const registrationSchema = new mongoose.Schema({
//     username: String,
//     password: String,
//     email:String
//   });


// const RegistrationUser = mongoose.model('RegistrationUser', registrationSchema);

// // Define User schema and model for login
// const loginSchema = new mongoose.Schema({
//     username: String,
//     password: String,
//   });

//   const LoginUser = mongoose.model('LoginUser', loginSchema);

  // Registration route
// app.post('/register', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//       const user = new RegistrationUser({ username, password });
//       await user.save();
//       res.status(201).send('User registered successfully');
//     } catch (error) {
//       res.status(500).send(error.message);
//     }
//   });


  // Login route
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//       const user = await LoginUser.findOne({ username, password });
//       if (user) {
//         res.status(200).send('Login successful');
//       } else {
//         res.status(401).send('Invalid credentials');
//       }
//     } catch (error) {
//       res.status(500).send(error.message);
//     }
//   });


  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });