import express from 'express'
import {database} from './connection.mjs'
import 'dotenv/config'

const app = express()
const port = 3000
const __dirname = import.meta.dirname
app.use(express.json());
app.get('/', (req, res) => {
  res.send("MongoDb Connectivity");
})

app.post('/create', async(req,res)=>{
  try{
     const {postTitle, postComment, postLikes} = req.body;
     const result = await database.collection("posts").insertOne({postTitle, postComment, postLikes});
     res.send({result, message: "Post Inserted"});
  }catch(error){
    res.send({ErrorMessage: error})
  }
})

app.get('/get', async(req,res)=>{
  try{
     const result = await database.collection("posts").find({}).toArray();
     res.send({result});
  }catch(error){
    res.send({ErrorMessage: error})
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
