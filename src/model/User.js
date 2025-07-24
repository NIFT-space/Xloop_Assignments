import mongoose  from "mongoose";
import { string } from "yup";

const userSchema = new mongoose.Schema({

    name :string,
    email: {type:string, unique:true}

})

export default mongoose.models.User || mongoose.User