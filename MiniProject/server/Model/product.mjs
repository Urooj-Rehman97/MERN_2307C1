import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  Name: {
    type: String,
    required: true
  }, 
  Price: {
    type: String,
    required: true
  },
  ImageUrl: {
    type: String,
   
  },// String is shorthand for {type: String}

});

export default mongoose.model("products", productSchema)