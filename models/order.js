const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  order: {
    type: String, 
    required: true
  }, 
  completed: {
    type: Boolean, 
    required: true
  }
})

module.exports = mongoose.model('Order', OrderSchema)