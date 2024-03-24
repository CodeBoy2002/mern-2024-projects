import mongoose from "mongoose";

const rightSchema = new mongoose.Schema({
    staff_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff'
    },
    right: {
        type: String,
        required: true
    }
})

const Right = mongoose.model('Right', rightSchema)

export default Right