import mongoose from 'mongoose'

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollNumber: {
        type: Number,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const student = mongoose.model('Student', studentSchema)

export default student
