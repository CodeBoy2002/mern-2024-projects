import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
    name: String,
    email: String,
    purchasedProduct: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Juice' }]
})

const Customer = mongoose.model('Customer', customerSchema)

export default Customer