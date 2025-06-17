import  mongoose from "mongoose";

const ClientSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true

    },
    message:{
        type:String,
        required:true

    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
})
export default mongoose.models.client || mongoose.model("client",ClientSchema);