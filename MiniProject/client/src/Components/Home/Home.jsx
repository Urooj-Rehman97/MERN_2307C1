import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
  const token = localStorage.getItem("token")
  const uname = localStorage.getItem("username")
  const navigate = useNavigate()
  const [tokendt, settokendt] = useState({
    token
  })

  useEffect(()=>{
    if(token == null){
      navigate("/login")
    }
  })

  const logout = async()=>{
    const result = await axios.post("http://localhost:3000/project/logout", tokendt)
    if(result.data.logoutsts === 0){
      localStorage.removeItem("token")
      localStorage.removeItem("username")
      navigate("/login")
    }
  }

  return (
    <div>
      <h1>Welcome {uname} to Our Home Page </h1>
      <p>Token: {token}</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home
