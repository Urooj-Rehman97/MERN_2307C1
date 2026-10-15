import express from 'express'
import {main} from './connection/connection.mjs'
import UserRouter from './Routes/routes.mjs'
const app = express()
const port = 3000

app.use(express.json())
app.use('/User', UserRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
