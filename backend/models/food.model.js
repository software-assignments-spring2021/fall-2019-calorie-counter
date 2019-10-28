  const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  food_name: {type: String, required: true, trim: true, minlength: 3},
  username: { type: String, required: true,  trim: true, minlength: 3},
  calorie: {type: Number, required: true},
  time_eaten: {type: Date, required: false}
},{
  timestamps: true,
});

const Food = mongoose.model('Food', userSchema);

module.exports = Food;