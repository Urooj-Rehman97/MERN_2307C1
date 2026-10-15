import express from 'express'
import fs from 'fs'
//Import Module

import add from './math.mjs'
// const add = require('./math.mjs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello MERN Developer! \n First Lecture')
})

app.get('/about', (req, res) => {
  res.send('This is Our About Page')
})

app.get('/data', (req, res) =>{
  res.json({
    "name" : "Student Name",
    "BatchCode" : "2307C1",
    "Semester" : "ADSE-I",
    "Age": 20
  })
})

//fs Module  fs Module is used to read + write in file

fs.writeFileSync("message.txt", "Hello from Node FS")
const data = fs.readFileSync("message.txt", "utf8")
console.log("File Content: ", data)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log('Sum: ',add(10,20))
})
