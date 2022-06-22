import { Router } from "express";
import { studentRouter } from "./student.routes";
import { teacherRouter } from "./teacher.routes";

const routes = Router();

routes.use('/student', studentRouter);
routes.use('/teacher', teacherRouter);

export {routes}