const orderService=require('../service/order.service')
class OrderController {

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
                let orderDto={
                    customer_id:"qwerty",
                    items:'',

                }
                orderService.placeOrder(orderDto).then((data)=>{
                    response.success = true;
                    response.message = "Order Placed Successfully.";
                    response.data = data;
                    return res.status(200).send(response);
    
                }).catch(err=>{
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
    editOrder = (req, res, next) => {
        try {
            let response = {}
            let token = req.params.token
            let orderId=req.params.orderId;

            req.checkBody('items.*', 'Please Enter Valid Catalog name!').notEmpty();

            let validationErrors = req.validationErrors();
            if (validationErrors) {
                response.success = false;
                response.message = "Invalid Credentials for catalog!";
                response.data = validationErrors[0].msg;
                return res.status(500).send(response);

            } else {
                let orderDto={
                    customer_id:"",
                    items:[],
                    order_id:orderId

                }
                orderService.editOrderPlaced(orderDto)
                .then((data)=>{
                    response.success = true;
                    response.message = "Order Edited Successfully.";
                    response.data = data;
                    return res.status(200).send(response);
    
                }).catch(err=>{
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
    getAOrderofCustomer = (req, res, next) => {
        try {
            let token = req.params.token;
            let orderId=req.params.orderId;
            
            let response = {}
            let orderDto={
                customer_id:"",
                items:[],
                order_id:orderId

            }
            orderService.getAOrderPlaced(orderDto)
            .then((data)=>{
                response.success = true;
                response.message = "Getting A Customer order Successfully.";
                response.data = data.data;
                return res.status(200).send(response);

            }).catch(err=>{
                response.success = false;
                response.message = "Order Edited Un-Successfully.";
                response.data = err;
                return res.status(400).send(response);

            })
           
          

        } catch (error) {
            next(error)
        }
    };
    getAllOrderOfCustomer = (req, res, next) => {
        try {
            let token = req.params.token

            let response = {}
            let orderDto={
                customer_id:"",
                items:[],

            }
            orderService.getAllCustomerOrder(orderDto)
            response.success = true;
            response.message = "Getting All Order of Customer Successfully.";
            response.data = token;
            return res.status(200).send(response);

        } catch (error) {
            next(error)
        }

    };

}
module.exports = new OrderController();