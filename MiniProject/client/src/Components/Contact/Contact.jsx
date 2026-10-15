import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [subject, setSubject] = useState()
    const [message, setMessage] = useState()

    const send = async(e)=>{
        e.preventDefault()
    
        try {
                const res = await axios.post('http://localhost:3000/project/sendemail',{
                    name, email, subject, message
                });
                alert('Email Send Successfully...')
            } catch (error) {
                Console.log(error)
            }
    }
  return (
    <div>
      <h1 className='text-center'>Contact Us</h1>
      <form >
        <input type="text" placeholder='Name' className='form-control' name="" id="" onChange={(e)=>setName(e.target.value)}/><br/>
        <input type="email" placeholder='Email' className='form-control' name="" id="" onChange={(e)=>setEmail(e.target.value)}/><br/>
        <input type="text" placeholder='Subject' className='form-control' name="" id="" onChange={(e)=>setSubject(e.target.value)}/><br/>
        <textarea name="" placeholder='Message' className='form-control'id="" onChange={(e)=>setMessage(e.target.value)}/><br/>
        <button onClick={send} className="btn btn-info">Send</button>
      </form>
    </div>
  )
}

export default Contact
