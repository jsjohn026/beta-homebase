const Order = require('../models/Order')

module.exports = {
  getOrders: async (req, res) => {
    try {
        const workOrders = await Order.find()
        const ordersLeft = await Order.countDocuments({completed: false})
        res.render('orders.ejs', {orders: workOrders, left: ordersLeft})
    } catch (error) {
      console.error("Unable to load orders page:" + error)
    }
  },

  createOrder: async (req, res) => {
    try {
      await Order.create({order: req.body.workOrder, completed: false})
      console.log('Work order has been added!')
      res.redirect('/orders')
    } catch (error) {
      console.error("Unable to submit work order:" + error)
    }
  }
}