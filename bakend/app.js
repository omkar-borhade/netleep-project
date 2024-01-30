// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');
const { connectMDB } = require('./connection');

const app = express();
const port = 8005;

// Connect to MongoDB
connectMDB('mongodb://localhost:27017/login-tut')
  .then(() => {
    console.log('MongoDB connected');
    // Start the server after connecting to the database
  
  })
  .catch((err) => {
    console.log('MongoDB error', err);
  });

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend'), { extensions: ['html', 'htm', 'css', 'js'] }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use routes
app.use('/', homeRoutes);
app.use('/', userRoutes);
app.use('/', productRoutes);

// Use the error handling middleware
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



