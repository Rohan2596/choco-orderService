const express = require('express');
const route = express.Router();


/** 
 * Routes for Placing A Order from catalog..
 * 1)Placing Order
 * 2)Editing Order
 * 3)Getting an particular orderId based on customerId
 * 4)Getting All order based on customer id
 * 
*/
route.post("/:token", () => { console.log("making an order..."); })
route.put("/:token", () => { console.log("Editing order..."); })
route.get("/:token/:orderId",()=>{console.log("Getting user based on orderId");})
route.get("/:token/all",()=>{console.log("Getting All User Order..");})


module.exports = route