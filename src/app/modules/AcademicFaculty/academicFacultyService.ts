import { TAcademicFaculty } from "./academicFacultyinterface"
import { AcademicFaculty } from "./academicFacultyModel"





const createAcademicFacultyIntoDb = async (payload :TAcademicFaculty)=>{
    const result = await AcademicFaculty.create(payload)
    return  result
}

const getAllAcademicFacultyFromDb = async()=>{
    const result = await  AcademicFaculty.find()
    return result
}




const getSingleAcademicFaculty = async (id: string)=>{
    const result = await AcademicFaculty.findById(id)
    return result
}

const updateSingleAcademicFaculty = async(id: string,payload: Partial<TAcademicFaculty>)=>{
   

            const result = await AcademicFaculty.findByIdAndUpdate({_id:id},payload,{new:true})
            return result
}
export const academicFacultyServices= {
    createAcademicFacultyIntoDb,
    getAllAcademicFacultyFromDb,
    getSingleAcademicFaculty,
    updateSingleAcademicFaculty
    

}