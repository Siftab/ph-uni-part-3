import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicFacultyValidations } from './academicFacultyValidation';
import { academicFacultyControllers } from './academicFaciultyControllers';

const router = express.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(academicFacultyValidations.academicFacultySchemaValidation),
  academicFacultyControllers.createAcademicFaculty,
);

router.patch(
  '/:facultyId',
  validateRequest(academicFacultyValidations.academicFacultySchemaValidation),
  academicFacultyControllers.updateFaculty,
);

router.get("/",academicFacultyControllers.getAllFaculties)





export const academicFacultyRoutes = router;
