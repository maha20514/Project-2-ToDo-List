const mongoose = require('mongoose')

const dbURL= 'mongodb://localhost:27017/TodoListV01'

mongoose.connect(dbURL)

//Extra
const db = mongoose.connection

db.on('erroe', (err)=>{
    console.log("ERROR in MongoDB")
})

db.on('connected', (err)=>{
    console.log("Mongo is CONNECTED..")
})