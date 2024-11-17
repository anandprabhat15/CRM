// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerId: mongoose.Schema.Types.ObjectId,
  items: Array,
  totalAmount: Number,
  date: Date,
});

module.exports = mongoose.model('Order', orderSchema);

