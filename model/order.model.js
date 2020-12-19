const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const orderModel = new Schema({
    'order_id': ObjectId,
    'customer_id': {
        type: String,
        required: true
    },
    'items': [],

}, {
    timestamps: true
});

const order = mongoose.model('order', orderModel);
class OrderModel {
    placeOrder = (orderDto, next) => {
        try {
            return new Promise((resolve, reject) => {


                new order(orderDto)
                    .save()
                    .then(result => {
                        resolve({ message: 'Order Placed successfully.', data: result });
                    }).catch(err => {
                        reject({ message: 'Order Failed !', error: err });
                    })

            })

        } catch (error) {
            next(error)

        }
    };

    editPlacedOrder = (orderDto, next) => {
        try {
            return new Promise((resolve, reject) => {
                order.findOneAndUpdate(
                    {
                        '_id':orderDto.order_id
                    },{
                        
                        $set: {
                            "items": [],
                            "customer_id":"ererewr"
                        }
                    }
                ).then((result) => {

                    if(result){
                        resolve({ message: 'Order Placed Edited successfully.', data: result });

                    }else{
                        reject({ message: 'Order Failed !', error: err });

                    }
                }).catch((err) => {
                    next(err);
                })
            })
        } catch (error) {
            next(error)
        }
    };
    getAPlacedOrder = (orderDto, next) => {
        try {
            return new Promise((resolve, reject) => {
 
                order.findOne({
                    '_id':orderDto.order_id
                }).then((result)=>{
                    if(result){
                        resolve({ message: 'Order Placed Edited successfully.', data: result });

                    }else{
                        reject({ message: 'Order Failed !', error: err });

                    }

                }).catch((err)=>{

                })
            })
        } catch (error) {

        }
    };
    getAllCustomerOrder = (orderDto, next) => {
        try {
            return new Promise((resolve, reject) => {

            })
        } catch (error) {

        }
    }
}
module.exports = new OrderModel();