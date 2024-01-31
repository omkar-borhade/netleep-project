// productController.js
const User = require('../models/user');
const Product = require('../models/product');






// productController.getCartPage = (req, res) => {
//   // Add logic to render or send the cart page
//   res.render('cart');
// };














const productController = {};









// ================================================
productController.checkout = async (req, res, next) => {
  console.log('Request Payload:', req.body);
  const {
    username,
    fullName,
    email,
    address,
    state,
    district,
    zip,
    ccname,
    cccvv,
    ccexpiration,
    action,
  } = req.body;
  const { itemsno, totalprice, totaldiscountprice, totaldiscount, itemsids, itemsnames } = req.body;

  try {
    if (action === 'submit') {
      // Check if the user exists
      const existingUser = await User.findOne({ username });

      if (existingUser) {
        // Update user data
        existingUser.fullName = fullName;
        existingUser.email = email;
        existingUser.address = address;
        existingUser.state = state;
        existingUser.district = district;
        existingUser.zip = zip;
        existingUser.ccname = ccname;
        existingUser.cccvv = cccvv;
        existingUser.ccexpiration = ccexpiration;

     

        // Save product data
        const newProduct = new Product({
          itemsno,
          totalprice,
          totaldiscountprice,
          totaldiscount,
          itemsids,
          itemsnames,
          username: existingUser.username,
        });
   // Save the updated user data
   await existingUser.save();
   await newProduct.save();

   return res.json({ success: true, message: 'Data updated successfully.', redirect: '/orderplace' });
   // return res.redirect('/orderplace.html');
      } else {
        return res.json({ success: false, message: 'User does not exist. Please check your username.' });
      }
    } else {
      return res.json({ success: false, message: 'Invalid action' });
    }
  } catch (error) {
    console.error('Error during save data:', error);
    next(error); // Pass the error to the error handling middleware
  }
};


// ============================
productController.getProductList = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.render('productList', { products });
  } catch (error) {
    next(error);
  }
};
// .................

productController.getCartPage = (req, res) => {
  res.render('cart'); 
};

module.exports = productController;
