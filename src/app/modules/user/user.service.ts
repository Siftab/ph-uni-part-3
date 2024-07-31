import mongoose from 'mongoose';
import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { AcademicSemester } from './../academicSemester/academicSemester.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'student';

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  const session =await mongoose.startSession()

try {
      session.startTransaction()
    //set  generated id
    userData.id = await generateStudentId(admissionSemester);

    // create a user
    const newUser = await User.create([userData],{session});
  
    //create a student
    if (!newUser.length) {
      throw new Error("failed to create a user ")
    }
      // set id , _id as user
      payload.id = newUser[0].id;
      payload.user = newUser[0]._id; //reference _id


  
      const newStudent = await Student.create([payload],{session});


      if(!newStudent){
        throw new Error("failed to create a student ")

      }


      await session.commitTransaction()
      await session.endSession()

      return newStudent;
    }
  
 catch (error) {
  await session.abortTransaction()
  await session.endSession()

   
  
}
};

export const UserServices = {
  createStudentIntoDB,
};
