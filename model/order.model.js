const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const orderModel = new Schema({
    'order_id': ObjectId,
    'customer_id': {
        type: String,
        required: true
    },
    'items': {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

const order=mongoose.model('order',orderModel);
class OrderModel{
placeOrder = (orderDto, next) => {
        try {
            return new Promise((resolve, reject) => {

            
                new order("")
                    .save()
                    .then(result => {
                        resolve({ message: 'Catalog Added successfully!', data: result });
                    }).catch(err => {
                        reject({ message: 'Catalog Addition Failed!', error: err });
                    })

            })

        } catch (error) {
            next(error)

        }
    };

    editPlacedOrder=(orderDto,next)=>{
        try {
            return new Promise((resolve,reject)=>{

            })
        } catch (error) {
            
        }
    };
    getAPlacedOrder=(orderDto,next)=>{
        try {
            return new Promise((resolve,reject)=>{

            })
        } catch (error) {
            
        }
    };
    getAllCustomerOrder=(orderDto,next)=>{
        try {
            return new Promise((resolve,reject)=>{
                
            })
        } catch (error) {
            
        }
    }
}
module.exports=new OrderModel();