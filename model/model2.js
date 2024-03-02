const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    
  });

  const FoodItem = mongoose.model('FoodItem', foodItemSchema);

  module.exports = FoodItem;

