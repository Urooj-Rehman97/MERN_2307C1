import express from 'express'
import { chktoken, login, logout, signup } from '../Controllers/userController.mjs'
import { GetAllProducts, createProduct } from '../Controllers/productController.mjs'
import uploads from '../utils/upload.mjs'
import { emailsending } from '../Controllers/emailController.mjs'

const myroutes = express.Router()

myroutes.post('/signup', signup)
myroutes.post('/login', login)
myroutes.post("/chktoken", chktoken)
myroutes.post("/logout",logout)

//Product Routes
myroutes.post("/products", uploads.single("Image"), createProduct)
myroutes.get("/getProducts", GetAllProducts);

//Email sending
myroutes.post("/sendemail", emailsending)


export default myroutes