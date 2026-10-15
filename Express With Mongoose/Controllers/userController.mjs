import user from "../Models/user.mjs";
import bcrypt from "bcrypt";

//insert data
export const createUser = async(req,res) =>{
try {
    const {UserName, UserEmail, UserPassword} = req.body;
    // console.log("BODY DATA:", req.body); 
    const emailExists = await user.findOne({UserEmail: UserEmail});
    if(!emailExists){
        const NewUser = new user({
            UserName: UserName,
            UserEmail: UserEmail,
            UserPassword: bcrypt.hashSync(UserPassword, 10)
        });
        await NewUser.save();
        res.send({message: "User Register Successfully"})
    }else{
        res.send({message: "Email Already Exists"})

    }
} catch (error) {
    res.send({errorMessage: error.message})
}


}

//GetAllData
export const getAll = async(req,res) =>{
    try {
        const allUser = await user.find({});
        if(allUser){
            res.send({allUser})
        }else{
            res.send({message: "No data Found"});
        }
    } catch (error) {
        res.send({Error: error.message})
    }
}

//GetUserById

export const getById = async(req,res) =>{
    try {
    const {id} = req.params;
    const singleUser = await user.findById(id);
    if(singleUser){
        res.send(singleUser)
    }else{
        res.send({message: "User Not Found"})
    }

    } catch (error) {
        res.send({Error: error.message})

    }
}


//Update User

export const updateUser = async(req,res) =>{
    try {
        const {id} = req.params;
        const updated = await user.findByIdAndUpdate(id, req.body);
        res.send({message: "User Updated Successfully", updated})
    } catch (error) {
        res.send({Error: error.message})

    }
}

//Delete User
export const deleteUser = async(req,res) =>{
    try {
        const {id} = req.params;
        const deleted = await user.findByIdAndDelete(id);
        res.send({message: "User Deleted Successfully"})
        
    } catch (error) {
        res.send({Error: error.message})

    }
}