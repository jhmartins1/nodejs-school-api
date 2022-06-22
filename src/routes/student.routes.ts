import { Router } from "express";

import { CreateStudentController } from "../controllers/student/CreateStudentController";
import { DeleteStudentController } from "../controllers/student/DeleteStudentController";
import { GetAllStudentsController } from "../controllers/student/GetAllStudentsController";
import { GetOneStudentController } from "../controllers/student/GetOneStudentController";
import { UpdateStudentController } from "../controllers/student/UpdateStudentController";

const studentRouter = Router();
const createStudentController = new CreateStudentController();
const getAllStudentsController = new GetAllStudentsController();
const getOneStudentController = new GetOneStudentController();
const updateStudentController = new UpdateStudentController();
const deleteStudentController = new DeleteStudentController();

studentRouter.post('/', createStudentController.handle);
studentRouter.get('/', getAllStudentsController.handle);
studentRouter.get('/:id', getOneStudentController.handle);
studentRouter.patch('/:id', updateStudentController.handle);
studentRouter.delete('/:id', deleteStudentController.handle);

export {studentRouter}