import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
 UserName: String,
 UserEmail: String,
 UserPassword: String,
 

//  UserPassword: {type: String, required: "Must Enter UserPassword"}
});

export default mongoose.model("user", UserSchema)