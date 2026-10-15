import path from 'path'
import { fileURLToPath }  from 'url'
import fs from 'fs/promises'
import product from '../Model/product.mjs';

const getImageUrl = (req,filename)=>{
    return `${req.protocol}://${req.get("host")}/uploads/${filename}`;
}

//Create Product
//http://localhost:3000/project/products
export const createProduct = async(req,res)=>{
    try {
        const {Name, Price} = req.body
        if(!Name && !Price){
            if(req.file){
                await fs.unlink(path.join(__dirname,'../uploads/', req.file.filename))
            }
            return res.status(400).json({success: false, message: "Name and Price are required"})
        }

        const ImageUrl = req.file? getImageUrl(req, req.file.filename) : null
        const newProduct = await product.create({
            Name,
            Price,
            ImageUrl
        });
        return res.status(200).json({success: true, newProduct})
    } catch (error) {
        // console.log(error)
        res.json({success: true, message: error.message})
    }
}


//GetAllProducts
//http://localhost:3000/project/getProducts

export const GetAllProducts = async(req,res)=>{
    try {
        const products = await product.find();
        if(products){
            return res.status(200).json({success: true, data:products});
        }else{
            return res.status(404).json({message: "No Data Found"});

        }
    } catch (error) {
        return res.status(500).json({success: false, message:error.message});
    }
    

}