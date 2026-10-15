import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router';

const Register = () => {
   const [userdt, setuserdt] = useState({
    UserName: '',
    UserEmail: '',
    UserPassword:''
   });

const InputChange = (e)=>{
   const {name, value} = e.target
   setuserdt({
    ...userdt,
    [name]: value
   })
}

const submitData = async(e)=>{
    e.preventDefault()
    try {
        const result = await axios.post("http://localhost:3000/project/signup", userdt)
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div>
      <div className='container mt-5'>
        <div className="row mt-5">
            <h1 className='text-center'>Register</h1>
            <div className="col-6 offset-3 mt-5">
                <input type="text" name="UserName" id="" className='form-control' onChange={InputChange}/><br />
                <input type="email" name="UserEmail" id="" className='form-control' onChange={InputChange}/><br />
                <input type="password" name="UserPassword" id="" className='form-control' onChange={InputChange}/><br />
                <input className='btn btn-info' type="submit" value="Register" onClick={submitData}/>
                <p>Already have an account <Link to="/login">Login</Link> </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register
