import { Router } from "express";
import { studentRoute } from "./student.routes";

const routes = Router();

routes.use('/student', studentRoute);

export {routes}