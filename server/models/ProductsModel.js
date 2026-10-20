import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
   title:{type:String,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true},
  features: [{
      type: String,
      trim: true
    }],
    description:{type:String,required:true},
},{timestamps:true})

const Product =  mongoose.model("Product",ProductSchema)

export default Product
