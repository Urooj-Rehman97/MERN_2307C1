import user from "../Model/user.mjs"
import userToken from "../Model/token.mjs"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SECRET_KEY = 'abcdef'

// http://localhost:3000/project/signup
export const signup = async(req, res)=>{
try {
    const {UserName, UserEmail, UserPassword} = req.body
    const emailExist  = await user.findOne({UserEmail: UserEmail})

    if(!emailExist){
        const newUser = new user({
            UserName: UserName,
            UserEmail: UserEmail,
            UserPassword: bcrypt.hashSync(UserPassword, 10)
        })

        const userData = await newUser.save();
        res.send({"message": "User Register Successfully"})
    }else{
        res.send({"message": "Email Already Exists"})

    }
} catch (error) {
 res.send({errorMessage: error.Message})   
}

}

//http://localhost:3000/project/login

export const login = async(req, res)=>{
    try {
        const {UserEmail, UserPassword} = req.body
        const login = await user.findOne({UserEmail: UserEmail})
        if(!login){
            res.send({"message": "Email Not Found", "sts":1})
        }else{
            const token = jwt.sign({userId:login._id},SECRET_KEY,{expiresIn:'1hr'})
            const uname =login.UserName
            const expiresAt = new Date(Date.now()+(60*60*1000));
            const tokenSave = new userToken({
              UserId: login._id,
              token: token,
              expiresAt: expiresAt
            })
            await tokenSave.save();
            const pwd = await bcrypt.compare(UserPassword, login.UserPassword)
           if(pwd){
                res.send({"message": "Login Successfully", "sts":0 ,"username":uname, token})
           } else{
            res.send({"message": "Incorrect Password", "sts":1})

           }
        }
    } catch (error) {
        res.send({errorMessage: error.Message})   

    }
}


//http://localhost:3000/project/chktoken
export const chktoken = async(req,res) =>{
    const token = req.body.token;
    const chktoken = await userToken.findOne({token})
    if(!chktoken){
        return res.send({"tokensts": "1"})
    }else{
        return res.send({"tokensts": "0"})

    }
}

//http://localhost:3000/project/logout

export const logout = async(req,res) =>{
    const token = req.body.token
    const logout = userToken.findOneAndDelete({token})
    if(!logout){
        res.send({"logoutsts":1})
    }else{
        res.send({"logoutsts":0})

    }
}