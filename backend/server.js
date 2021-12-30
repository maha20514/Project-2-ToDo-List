const express = require('express');
const app = express();


const db=require('./db');
const Todo= require('./todo');
//console.log(Todo);

app.use(express.json());

app.get('/', (req, res)=>{
    res.json('GET / is working');
});

app.get('/tasks', (req, res)=>{
    Todo.find({}, (err, data)=>{
        if(err)
        {
            console.log("ERROR: ", err);
        }else
        {
            res.json(data);
        }
    })
    res.json('GET / is  working')
});


app.post("/tasks", (req, res)=>{
 Todo.create(req.body, (err, newTask)=>{
     console.log('25:',req.body)
      if(err)
     {
         console.log("EROOR: ", err);
     }else
     {
         res.status(201).json(newTask);
     } 
 });
});

app.delete("/tasks/:id", (req , res)=>{
    Todo.deleteOne({id: req.params.id} , (err, deleteobj)=>{
        if(err)
        {
            console.log("ERROE: ", err);
        }else{
            deleteobj.deltedCount === 1 
              ?res.json('Delete one todo successfuly..')
              :res.status(404).json('This todo is not found');

            //console.log(deleteobj);
        }
    });
});

app.put("/tasks/:id", (req, res)=>{
    Todo.updateOne({id : req.params.id},{title : req.body.newTitle}
     , (err , updateobj)=>{
        if(err)
     {
         console.log("EROOR: ", err);
         res.json(400).json(err)
     }else
     {  updateobj.modifiedCount ==1 
        ?res.json("Updated Sucessfuly..")
        :res.status(404).json('This todo is not found');


     } 
    })
})
app.listen(5000, ()=>{
    console.log('SERVER IS WORKING...')
});