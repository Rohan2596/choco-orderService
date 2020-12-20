const orderModel = require('../model/order.model')
class OrderService {

    placeOrder = (orderDto, next) => {
        try {
            console.log(orderDto);
            return orderModel.placeOrder(orderDto)
                .then((data) => {

                    return data;
                })
                .catch((err) => {
                    return err;
                });
        } catch (error) {
            next(error)
        }
    };
    editOrderPlaced = (editOrderDto, next) => {
        try {
            console.log(editOrderDto);
            return orderModel.editPlacedOrder(editOrderDto)
                .then((data) => {
                    return data;
                }).catch((err) => {
                    return err;
                })
        } catch (error) {
            console.log(error);
            next(error)
        }
    };
    getAOrderPlaced = (orderDto, next) => {
        try {
            console.log(orderDto);
            return orderModel.getAPlacedOrder(orderDto)
                .then((data) => {
                    return data;

                }).catch((err) => {
                    return err;
                })
        } catch (error) {
            next(error)
        }
    };
    getAllCustomerOrders = (orderDto, next) => {
        try {
            console.log(orderDto);
            return orderModel.getAllCustomerOrder(orderDto)
            .then((data) => {
                return data;

            }).catch((err) => {
                return err;
            })
        } catch (error) {
            next(error)
        }
    };
    getAllPlacedOrders=(orderDto,next)=>{
        try {
            return orderModel.getAllOrderPlacedOrders(orderDto)
            .then((data)=>{
                return data;
            }).catch((err)=>{
                return err;
            })
        } catch (error) {
            
            next(error)
        }
    }


}
module.exports = new OrderService();
