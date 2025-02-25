const express = require('express')
const router = express.Router()
const ordersController = require('../controllers/orders')

router.get('/', ordersController.getOrders)
router.post('/createOrder', ordersController.createOrder)

module.exports = router