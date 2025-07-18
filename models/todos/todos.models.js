import mongoose from "mongoose"

const todosSchema = new mongoose.Schema({
    content: {
        type: String,
        required:true
    }
    , complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: Object.Schema.Types.ObjectId,
        ref: "User" // it is the collection name in the user.model
    },
    subTodos: [
        {
            type: Object.Schema.Types.ObjectId,
            ref: "SubTodos"
        }
    ]
}, { timestamps: true })

export const Todos = new mongoose.model("Todos", todosSchema)