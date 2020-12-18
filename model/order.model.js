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
