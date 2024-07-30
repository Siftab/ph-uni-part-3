import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { academicFacultyServices } from "./academicFacultyService";







const createAcademicFaculty = catchAsync(async(req,res)=>{

    const result = await academicFacultyServices.createAcademicFacultyIntoDb(req.body)



    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Faculty  is created succesfully',
        data: result,

    })
})


const getAllFaculties = catchAsync(async(req,res)=>{
    const result = await academicFacultyServices.getAllAcademicFacultyFromDb()


    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"retirve all faculty successfully ",
        data:result
    })
})



const updateFaculty= catchAsync(async(req,res)=>{

    const {facultyId}= req.params;

    const result = await academicFacultyServices.updateSingleAcademicFaculty(facultyId,req.body)


    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Faculty updated successfully",
        data:result

    })
})





export const academicFacultyControllers={
    createAcademicFaculty,
    getAllFaculties,
    updateFaculty
}