const{Sechema, model, Schema} = require("mongoose");


const todoSchema = new Schema({
    titlt: String,
    isCompleted: Boolean
})

//Model 
const Todo= model('Todo', todoSchema)

module.exports= Todo