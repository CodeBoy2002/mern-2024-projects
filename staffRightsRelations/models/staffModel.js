import mongoose from "mongoose";

const staffSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Staff = mongoose.model('Staff', staffSchema)

export default Staff