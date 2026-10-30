import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    service:{type:String,required:true},
    date:{type:String},
    time:{type:String},
    name:{type:String,required:true},
    phone:{type:String,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true},
    description:{type:String,required:true}
},{timestamps:true})

const Booking = new mongoose.model("Booking",BookingSchema);

export default Booking;



















