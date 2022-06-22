import { Router } from "express";
import { CreateTeacherController } from "../controllers/teacher/CreateTeacherController";

const teacherRouter = Router();

const createTeacherController = new CreateTeacherController();

teacherRouter.post('/', createTeacherController.handle);

export {teacherRouter}