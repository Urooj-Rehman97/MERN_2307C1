import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';

const ProductComponent = () => {
    const navigate = useNavigate();
    const[Name,setName] = useState('');
    const[Price,setPrice] = useState('');
    const[Image,setImage] = useState(null);
    
    const onhandleSubmit = async(e)=>{
        e.preventDefault();

        const formData = new FormData()
        formData.append("Name" , Name);
        formData.append("Price", Price);
        formData.append("Image", Image);
        try {
            const res = await axios.post('http://localhost:3000/project/products',
            formData,{
              headers :{
                "Content-Type" : "multipart/form-data"
              }
            }
           
            
        );
        console.log(res.data)
        navigate("/getproducts")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
      <div className="container">
        <div className="row">
            <h1 className='text-center'>Add New Product</h1>
            <div className="col-6 offset-3">
                <form onSubmit={onhandleSubmit}>
                <label htmlFor="">Product Name:</label>
                <input type="text" className='form-control'onChange={(e)=> setName(e.target.value)} /><br />
                <label htmlFor="">Product Price</label>
                <input type="text" className='form-control' onChange={(e)=> setPrice(e.target.value)}/><br />
                <label htmlFor="">Product Image</label>
                <input type="file" accept='image/*' onChange={(e)=>setImage(e.target.files[0])} /><br/><br/>
                <input type="submit" value="Add New Product" className='btn btn-success'/>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductComponent
