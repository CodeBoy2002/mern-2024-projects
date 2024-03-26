import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    }, 
    totalQuantity: {
        type: Number,
        required: true
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    }
})

const Product = mongoose.model('Product', productSchema)

export default Product