import express from 'express'
import {database} from './connection.mjs'
import { ObjectId } from 'mongodb'
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//insert data

app.post('/create', async (req,res)=>{
   try{
    const {postTitle, postComment, postLikes} = req.body;
    const result = await database.collection("Posts").insertOne({postTitle, postComment, postLikes});
    res.send({result, message: "Post Inserted"})

   }catch(error){
        res.send({ErrorMessage: error})
   }
})


//Get data


app.get('/getAll', async (req,res)=>{
    try{
   
     const result = await database.collection("Posts").find({}).toArray();
     res.send({result})
 
    }catch(error){
         res.send({ErrorMessage: error})
    }
 })

 //Get By Id
 app.get('/getById/:id', async (req,res)=>{
    try{
   
     const id = req.params.id;
     const result = await database.collection("Posts").findOne({_id : new ObjectId(id)});
     console.log(id);
     console.log(result);
     res.send({result})
 
    }catch(error){
         res.send({ErrorMessage: error})
    }
 })

 //DeleteById

 app.delete('/Delete/:id', async (req,res)=>{
    try{
   
     const id = req.params.id;
     const result = await database.collection("Posts").deleteOne({_id : new ObjectId(id)});
     console.log(result);
     res.send({result, message: "Post Deleted Successfully"});
 
    }catch(error){
         res.send({ErrorMessage: error})
    }
 })


 //UpdatePost
 app.put('/update/:id', async (req,res)=>{
    try{
   
     const id = req.params.id;
     const result = await database.collection("Posts").findOneAndUpdate({_id : new ObjectId(id)}, req.body);
     console.log(result);
     res.send({result, message: "Post Updated Successfully"});
 
    }catch(error){
         res.send({ErrorMessage: error})
    }
 })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
