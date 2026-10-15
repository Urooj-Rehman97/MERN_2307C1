import mongoose from 'mongoose';
const { Schema } = mongoose;

const tokenSchema = new Schema({
  UserId:{
    type: mongoose.Types.ObjectId,
    required: true,
    ref:"user"
  },
  token: {
    type: String,
    required: true
  },
  expiresAt: {
    type: Date,
    required: true
  },// String is shorthand for {type: String}

});

tokenSchema.index({expiresAt:1},{expireAfterSeconds:0})

export default mongoose.model("userToken", tokenSchema)