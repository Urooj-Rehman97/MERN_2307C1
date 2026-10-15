import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  UserName: {
    type: String,
    required: true
  }, 
  UserEmail: {
    type: String,
    required: true
  },
  UserPassword: {
    type: String,
    required: true
  },// String is shorthand for {type: String}

});

export default mongoose.model("user", userSchema)