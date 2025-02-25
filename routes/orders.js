const express = require('express')
const router = express.Router()
const ordersController = require('../controllers/orders')
const { route } = require('./home')

router.get('/', ordersController.getOrders)
router.post('/createOrder', ordersController.createOrder)
router.put('/markComplete', ordersController.markComplete)
router.put('/markIncomplete', ordersController.markIncomplete)
router.delete('/deleteOrder', ordersController.deleteOrder)

module.exports = router