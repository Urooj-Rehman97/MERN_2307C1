import express from 'express'
import {main} from './Connection/connection.mjs'
import myroutes from './routes/routes.mjs'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
const app = express()
const port = 3000

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use('./uploads', express.static(path.join(__dirname, 'uploads')))
app.use(express.json())
app.use(cors())
app.use('/project', myroutes)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
