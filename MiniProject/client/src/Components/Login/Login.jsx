import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate()
   const [msg, setmsg] =useState("");
   const [logindt, setlogindt] = useState({
  
    UserEmail: '',
    UserPassword:''
   });

const InputChange = (e)=>{
   const {name, value} = e.target
   setlogindt({
    ...logindt,
    [name]: value
   })
}

const submitData = async(e)=>{
    e.preventDefault()
    try {
        const result = await axios.post("http://localhost:3000/project/login", logindt)
        console.log(result);
        if(result.data.sts === 0){
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("username", result.data.username);
          navigate("/home")
        }else{
            setmsg(result.data.message)
        }
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div>
      <div className='container mt-5'>
        <div className="row mt-5">
            <h1 className='text-center'>Login</h1>
            <div className="col-6 offset-3 mt-5">
               
                <input type="email" name="UserEmail" id="" className='form-control' onChange={InputChange}/><br />
                <input type="password" name="UserPassword" id="" className='form-control' onChange={InputChange}/><br />
                <p style={{"color":"red"}}>{msg}</p>
                <input className='btn btn-info' type="submit" value="Login" onClick={submitData}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
