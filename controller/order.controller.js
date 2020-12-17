class OrderController {

    placeOrder = (req, res, next) => {

        let response = {}
        response.success = true;
        response.message = "Order Placed Successfully.";
        response.data = "";
        return res.status(200).send(response);


    };
    editOrder = (req, res, next) => {

        let response = {}
        response.success = true;
        response.message = "Order Edited Successfully.";
        response.data = "";
        return res.status(200).send(response);

    };
    getAOrderofCustomer = (req, res, next) => {

        let response = {}
        response.success = true;
        response.message = "Getting A Customer order Successfully.";
        response.data = "";
        return res.status(200).send(response);

    };
    getAllOrderOfCustomer = (req, res, next) => {

        let response = {}
        response.success = true;
        response.message = "Getting All Order of Customer Successfully.";
        response.data = "";
        return res.status(200).send(response);
    };

}
module.exports = new OrderController();