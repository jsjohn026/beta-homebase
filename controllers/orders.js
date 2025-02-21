const Order = require('../models/Order')

module.exports = {
  getOrders: async (req, res) => {
    try {
        const workOrders = await Order.find()
        const ordersLeft = await Order.countDocuments({completed: false})
        res.render('orders.ejs', {orders: workOrders, left: ordersLeft})
    } catch (error) {
      console.error(error)
    }
  },
  
}