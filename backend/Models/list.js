import mongoose from "mongoose";



const listSchema = new mongoose.Schema(
    {
        task: String,
        done:{
            type:Boolean,
            default:false
        }
       
    },
    { timestamps: true }
  );
  
  export const List = mongoose.model("List", listSchema);
  