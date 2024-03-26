import mongoose from 'mongoose'

const customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    orderItem: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    orderDetails: {
        type: mongoose.Schema.Types.String,
        ref: 'Product'
    }
}, {
    timestamps: true
})

const Customer = mongoose.model('Customer', customerSchema)

export default Customer