import { Router } from "express";

import { CreateStudentController } from "../controllers/student/CreateStudentController";
import { GetAllStudentsController } from "../controllers/student/GetAllStudentsController";
import { GetOneStudentController } from "../controllers/student/GetOneStudentController";
import { UpdateStudentController } from "../controllers/student/UpdateStudentController";

const studentRoute = Router();
const createStudentController = new CreateStudentController();
const getAllStudentsController = new GetAllStudentsController();
const getOneStudentController = new GetOneStudentController();
const updateStudentController = new UpdateStudentController();

studentRoute.post('/', createStudentController.handle);
studentRoute.get('/', getAllStudentsController.handle);
studentRoute.get('/:id', getOneStudentController.handle);
studentRoute.patch('/:id', updateStudentController.handle);

export {studentRoute}