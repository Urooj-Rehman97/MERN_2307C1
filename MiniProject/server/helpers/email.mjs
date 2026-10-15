import nodemailer from 'nodemailer'
import path from 'path'
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));


export const sendEmail = async(to, subject, text)=>{
 try {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth:{
            user: 'urooj_rehman@aptechnorth.edu.pk',
            pass:'amhxrebzjexynqsm'
        }
    });

    await transporter.sendMail({
        from: '"Urooj Rehman" <urooj_rehman@aptechnorth.edu.pk>',
        to: to,
        subject: subject,
        text: text,
        // html: '<b>Hello<b><br/>',
        attachments:{
            filename: 'MERN R-Practical.pdf',
            // path: path.join(__dirname, 'server',  'files', 'MERN R-Practical.pdf')
            path: path.join(__dirname, "../files/MERN R-Practical.pdf")

        }
    })
 } catch (error) {
    console.log(error)
 }
}