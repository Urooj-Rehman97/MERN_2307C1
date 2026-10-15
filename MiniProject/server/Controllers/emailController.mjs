import express from 'express'
import { sendEmail } from '../helpers/email.mjs';

export const emailsending = async(req,res)=>{
  try {
      const {name, email, subject, message} = req.body;
      await sendEmail(email, subject, message)
      
      res.status(200).json({message: "Email Send Successfully"})
  } catch (error) {
    res.status(500).json({message: "Email Failed", error: error.message})
  }

}