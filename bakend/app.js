
const express = require('express');

const bodyParser = require('body-parser');
 const {connectMDB} =require("./connection")

const path = require('path');


const app = express();
const port = 8000;
const User = require('./models/user');
const Product = require('./models/product');


Product.collection.dropIndex({ username: 1 });




  //conection

connectMDB('mongodb://localhost:27017/login-tut', {
  useNewUrlParser: true,
  useUnifiedTopology: true,}).then(()=>
console.log("mongodb conescted"))
.catch(err=>console.log("mongo error",err))









app.use(bodyParser.json());



app.use(express.static(path.join(__dirname, '../frontend'), { extensions: ['html', 'htm', 'css', 'js'] }));






// Routes

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/home.html'));
});

// API endpoint for user login and registration
app.post('/login_sign', async (req, res) => {
    const { username, password, action } = req.body;
  
    try {
      if (action === 'login') {
        // Handle login
        const user = await User.findOne({ username, password });
  
        if (user) {
          res.json({ success: true, message: 'Login successful' });
          // res.render("home");
          
        } else {
          res.json({ success: false, message: 'Invalid username or password' });
        }
      } else if (action === 'register') {
        // Handle registration
        const existingUser = await User.findOne({ username });
  
        if (existingUser) {
          return res.json({ success: false, message: 'User already exists. Please choose another username.' });
        }
  
        const newUser = new User({ username, password });
        await newUser.save();
  
        res.json({ success: true, message: 'Registration successful. Please login.' });
      } else {
        res.json({ success: false, message: 'Invalid action' });
      }
    } catch (error) {
      console.error('Error during login or registration:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
  





  // app.post('/checkout', async (req, res) => {
  //   const {username, fullName,email,address,state,district,zip,ccname,cccvv,ccexpiration, action } = req.body;
  //   console.log(    {username, fullName,email,address,state,district,zip,ccname,cccvv,ccexpiration, action } 
  //     )
      
  //   try {
  //     if (action === 'submit') {
  //       // const user = await User.findOne({ username: req.user.username });
  //       const user = await User.findOne({ username});
  //       // console.log(user)
  //       if (user) {
  //         res.json({ success: true, message: 'datas successful' });
  //         // res.render("home");
          
  //       }

  //       const newUser = new User({username, fullName,email,address,state,district,zip,ccname,cccvv,ccexpiration, });
  //       await newUser.save();
  
  //       res.json({ success: true, message: 'data save successful. Please login.' });
  //     } else {
  //       res.json({ success: false, message: 'Invalid action' });
  //     }
  //   } catch (error) {
  //     console.error('Error during save data:', error);
  //     res.status(500).json({ success: false, message: 'Internal server error' });
  //   }
  // });
 

  app.post('/checkout', async (req, res) => {
  const { username, fullName, email, address, state, district, zip, ccname, cccvv, ccexpiration, action } = req.body;
                          //  console.log({ username, fullName, email, address, state, district, zip, ccname, cccvv, ccexpiration, action });
  const {itemsno,totalprice,totaldiscountprice,totaldiscount,itemsids,itemsnames } = req.body;
  // console.log({itemsno,totalprice,totaldiscountprice,totaldiscount ,itemsids,itemsnames})
  try {
  




    if (action === 'submit') {
      const existingUser = await User.findOne({ username });

      if (existingUser) {
        // Update the user data
        existingUser.fullName = fullName;
        existingUser.email = email;
        existingUser.address = address;
        existingUser.state = state;
        existingUser.district = district;
        existingUser.zip = zip;
        existingUser.ccname = ccname;
        existingUser.cccvv = cccvv;
        existingUser.ccexpiration = ccexpiration;



        const newProduct = new Product({ itemsno,totalprice,totaldiscountprice,totaldiscount, itemsids,itemsnames,  username: existingUser.username,});
        await newProduct.save();
    
        await existingUser.save();
        
        return res.json({ success: true, message: 'Data updated successfully.' });
      } else {
        // User does not exist, handle it accordingly
        return res.json({ success: false, message: 'User does not exist. Please check your username.' });
      }
    } else {
      return res.json({ success: false, message: 'Invalid action' });
    }
  } catch (error) {
    console.error('Error during save data:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

















// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;



// // Connect to MongoDB (replace 'your_database_url' with your MongoDB connection string)
// const connect=mongoose.connect('mongodb://localhost:27017/login-tut', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// // Serve static files (e.g., HTML, CSS)
//  app.use(express.static('frontend'));




// // Define a User schema
// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// // Create a User model based on the schema
// const User = mongoose.model('user', userSchema);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());




// // API endpoint for user login


// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });