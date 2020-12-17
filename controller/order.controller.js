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
                response.success = true;
                response.message = "Order Placed Successfully.";
                response.data = token;
                return res.status(200).send(response);

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
                response.success = true;
                response.message = "Order Edited Successfully.";
                response.data = token +"Order Id:- "+orderId;
                return res.status(200).send(response);
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
            response.success = true;
            response.message = "Getting A Customer order Successfully.";
            response.data = token +"Order Id:- "+ orderId ;
            return res.status(200).send(response);

        } catch (error) {
            next(error)
        }
    };
    getAllOrderOfCustomer = (req, res, next) => {
        try {
            let token = req.params.token

            let response = {}
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