const Order = require('../models/Order')

module.exports = {
  getOrders: async (req, res) => {
    try {
        const workOrders = await Order.find()
        const ordersLeft = await Order.countDocuments({completed: false})
        res.render('orders.ejs', {orders: workOrders, left: ordersLeft})
    } catch (error) {
      console.error("Unable to load orders page: " + error)
    }
  },
  createOrder: async (req, res) => {
    try {
      await Order.create({order: req.body.workOrder, completed: false})
      console.log('Work order has been added!')
      res.redirect('/orders')
    } catch (error) {
      console.error("Unable to submit work order: " + error)
    }
  },
  markComplete: async ( req, res ) => {
    try {
      await Order.findOneAndUpdate({_id: req.body.orderIdFromJSFile},{
        completed: true
      })
      console.log('Marked Complete')
      res.json('Marked Complete')
    } catch (error) {
      console.log("Unable to mark this order complete: " + error)
    }
  },
  markIncomplete: async (req, res) => {
    try {
      await Order.findOneAndUpdate({_id: req.body.orderIdFromJSFile}, {
        completed: false
      })
      console.log('Marked Incomplete')
      res.json('Marked Incomplete')
    } catch (error) {
      console.error("Unable to mark this order incomplete: " + error)
    }
  },
  deleteOrder: async (req, res) => {
    console.log(req.body.orderIdFromJSFile)
    try {
      await Order.findOneAndDelete({_id: req.body.orderIdFromJSFile})
      console.log('Deleted Order')
      res.json('Deleted Order')
    } catch (error) {
      console.error("Unable to delete order: " + error)
    }
  }
}