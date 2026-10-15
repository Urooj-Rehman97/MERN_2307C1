import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GetProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    const getProducts = async()=>{
        try {
           const res =  await axios.get('http://localhost:3000/project/getProducts')
           console.log(res)
           setProducts(res.data.data)
           setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(()=>{
        getProducts();
    },[])
  return (
    <div>
      <h1 style={{textAlign: "center"}}>All Products</h1>
       {loading?(<h2 className='text-center'>Loading...</h2>):(
              <table className='table table-bordered '>
              <thead>
                 <tr>
                 <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Product Image</th>
                  <th>Actions</th>
                 </tr>
              </thead>
              
              <tbody>
              {products.map((p)=>(
                  <tr key={p._id}>
                      <td>{p.Name}</td>
                      <td>{p.Price}</td>
                      <td>
                          {p.ImageUrl?(
                              <img src={p.ImageUrl} width="100" height="100"/>
                          ):("No image Found")}
                      </td>
                      <td>
                      <a href="" className='btn btn-warning'>Edit</a>    
                      <a href="" className='btn btn-danger'>Delete</a>    
                      </td>        
                  </tr>
              ))}
              </tbody>
            </table>
       )} 
    </div>
  )
}

export default GetProducts
