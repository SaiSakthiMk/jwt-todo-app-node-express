const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema({
    email: String,
    password:String,
    name:String
})
const Todo = new Schema({
    title:String,
    done:Boolean
    // UserId: ObjectId
})

const Usermodel =  mongoose.model('Users',User)
const todomodel =  mongoose.model('todos',Todo)
module.exports = {
    Usermodel : Usermodel,
    todomodel: todomodel
}
