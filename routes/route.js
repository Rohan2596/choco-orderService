const express = require('express');
const orderController = require('../controller/order.controller');
const route = express.Router();
const OrderController=require('../controller/order.controller')

/** 
 * Routes for Placing A Order from catalog..
 * 1)Placing Order
 * 2)Editing Order
 * 3)Getting an particular orderId based on customerId
 * 4)Getting All order based on customer id
 * 
*/
route.post("/:token",orderController.placeOrder)
route.put("/:token/:orderId", orderController.editOrder)
route.get("/:token/:orderId",orderController.getAOrderofCustomer)
route.get("/:token/all",orderController.getAllOrderOfCustomer)


module.exports = route