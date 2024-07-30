import { z } from "zod";

const academicFacultySchemaValidation = z.object({
    body:z.object({name: z.string({invalid_type_error:"Faculty name must be string "}),})
});



export const academicFacultyValidations ={
    academicFacultySchemaValidation
}