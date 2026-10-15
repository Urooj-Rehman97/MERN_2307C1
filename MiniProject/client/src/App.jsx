import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, useNavigate } from 'react-router'
import axios from 'axios'

function App() {
   const token = localStorage.getItem("token")
   const [tokendt, settokendt] = useState({
    token
   })

  //  useEffect(()=>{
  //   const chktoken = async()=>{
  //     const result = await axios.post("http://localhost:3000/project/chktoken", token)
  //     console.log("UseEffect running")

  //     try {
  //       if(result.data.tokensts == 1){
  //         console.log(result)
  //         localStorage.removeItem("token")
  //       }
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  //   chktoken()
  //  },[])
  useEffect(()=>{
    const checkToken = async()=>{
      const result = await axios.post("http://localhost:3000/project/chktoken", tokendt)
      try {
       
        console.log(result)
        if(result.data.tokensts == 1){
          localStorage.removeItem("token");
          localStorage.removeItem("username");
        }
      } catch (error) {
        console.error(error)
      }
    }

    checkToken()
  },[])

  return (
    
    <>
     <Outlet></Outlet>
    </>
  )
}

export default App
