const path = require('path');

const orderController = {};

orderController.getOrderPlacePage = (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/orderplace.html'));
};

module.exports = orderController;