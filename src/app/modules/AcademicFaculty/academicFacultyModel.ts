
import { model, Schema } from "mongoose";
import { TAcademicFaculty } from "./academicFacultyinterface";




const acdemicFacultySchema = new Schema<TAcademicFaculty>({

    name:{
        type:String,
        unique:true ,
        required:true
    }
    
    
},
{
    timestamps:true
})




export const AcademicFaculty = model<TAcademicFaculty>("AcademicFaculty",acdemicFacultySchema)