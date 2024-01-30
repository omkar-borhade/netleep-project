// userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const user = require('../models/user');

router.post('/login_sign', userController.loginSignUp);

router.get('/userList', async (req, res, next) => {
    try {
      const users = await user.find();
      res.render('userList', { users });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
