// // backend/controllers/auth.js
// const User = require('../models/user');

// exports.submitBillingAddress = async (req, res) => {
//   const {
    
//     firstName,
//     lastName,
//     email,
//     address,
//     address2,
//     country,
//     state,
//     zip,
//     sameAddress,
//     saveInfo,
//   } = req.body;

//   try {
//     // Retrieve the user from the database
//     const user = await User.findOne({ username });

//     if (!user) {
//       return res.status(404).json({ success: false, message: 'User not found' });
//     }

//     // Update the user's billing address fields with the provided data
//     user.billingAddress = {
//       firstName,
//       lastName,
//       email,
//       address,
//       address2,
//       country,
//       state,
//       zip,
//     };

//     // Save the updated user
//     await user.save();

//     res.json({ success: true, message: 'Billing address submitted successfully' });
//   } catch (error) {
//     console.error('Error submitting billing address:', error);
//     res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// };
