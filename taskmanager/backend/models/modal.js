import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        dueDate: {
            type: Date, //FORMAT:- MM/DD/YYYY
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },  
    }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
