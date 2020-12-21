const orderService = require('../service/order.service')
class OrderController {

    /*
    @purpose :- Placing a order by customer
    @author :- Rohan Kadam
    */
    placeOrder = (req, res, next) => {
        try {
            let response = {}
            let token = req.params.token


            req.checkBody('items.*', 'Please Enter Valid Catalog name!').notEmpty();

            let validationErrors = req.validationErrors();
            if (validationErrors) {
                response.success = false;
                response.message = "Invalid Credentials for catalog!";
                response.data = validationErrors[0].msg;
                return res.status(500).send(response);
            } else {
                let orderDto = {
                    customer_id: "qwerty",
                    items: '',

                }
                orderService.placeOrder(orderDto).then((data) => {
                    response.success = true;
                    response.message = "Order Placed Successfully.";
                    response.data = data;
                    return res.status(200).send(response);

                }).catch(err => {
                    response.success = false;
                    response.message = "Order Placed Successfully.";
                    response.data = token;
                    return res.status(400).send(response);

                })

            }

        } catch (error) {
            next(error)
        }


    };
    /*
    @purpose :- Editing the placed order from same.
    @author :- Rohan Kadam
    */
    editOrder = (req, res, next) => {
        try {
            let response = {}
            let token = req.params.token
            let orderId = req.params.orderId;

            req.checkBody('items.*', 'Please Enter Valid Catalog name!').notEmpty();

            let validationErrors = req.validationErrors();
            if (validationErrors) {
                response.success = false;
                response.message = "Invalid Credentials for catalog!";
                response.data = validationErrors[0].msg;
                return res.status(500).send(response);

            } else {
                let orderDto = {
                    customer_id: "",
                    items: [],
                    order_id: orderId

                }
                orderService.editOrderPlaced(orderDto)
                    .then((data) => {
                        response.success = true;
                        response.message = "Order Edited Successfully.";
                        response.data = data;
                        return res.status(200).send(response);

                    }).catch(err => {
                        response.success = false;
                        response.message = "Order Edited Un-Successfully.";
                        response.data = token;
                        return res.status(400).send(response);

                    })

            }
        } catch (error) {
            next(error)
        }

    };
    /*
    @purpose :- Getting the order for the based on id
    @author :- Rohan Kadam
    */
    getAOrderofCustomer = (req, res, next) => {
        try {
            let token = req.params.token;
            let orderId = req.params.orderId;

            let response = {}
            let orderDto = {
                customer_id: "",
                items: [],
                order_id: orderId

            }
            orderService.getAOrderPlaced(orderDto)
                .then((data) => {
                    response.success = true;
                    response.message = "Getting A Customer order Successfully.";
                    response.data = data.data;
                    return res.status(200).send(response);

                }).catch(err => {
                    response.success = false;
                    response.message = "Order Edited Un-Successfully.";
                    response.data = err;
                    return res.status(400).send(response);

                })



        } catch (error) {
            next(error)
        }

    };
    /*
    @purpose :- Getting all Order of customer
    @author :- Rohan Kadam
    */
    getAllOrderOfCustomer = (req, res, next) => {
        try {
            let token = req.params.token

            let response = {}
            let orderDto = {
                customer_id: "",
                items: [],

            }
            orderService.getAllCustomerOrders(orderDto)
                .then((data) => {

                    response.success = true;
                    response.message = "Getting All Order of Customer Successfully.";
                    response.data = data.data;
                    return res.status(200).send(response);
                }).catch(err => {
                    response.success = false;
                    response.message = "Order Edited Un-Successfully.";
                    response.data = err;
                    return res.status(400).send(response);

                })


        } catch (error) {
            next(error)
        }

    };
    /*
    @purpose :- Getting All Placed order
    @author :- Rohan Kadam
    */

    getAllOrdersPlaced = (req, res, next) => {
        try {
            let token = req.params.token

            let response = {}
            let orderDto = {
                customer_id: "",
                items: [],

            }
            orderService.getAllPlacedOrders(orderDto)
                .then((data) => {

                    response.success = true;
                    response.message = "Getting All Order of Customer Successfully.";
                    response.data = data.data;
                    return res.status(200).send(response);
                }).catch(err => {
                    response.success = false;
                    response.message = "Order Edited Un-Successfully.";
                    response.data = err;
                    return res.status(400).send(response);

                })


        } catch (error) {
            console.log(error);
            next(error)
        }
    }

}
module.exports = new OrderController();