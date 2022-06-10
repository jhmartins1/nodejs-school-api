import { Request, Response } from "express";
import { IStudent, CreateStudentService } from "../../services/student/CreateStudentService";

export class CreateStudentController {
  async handle(req: Request, res: Response) {
    const {name, age, email, password}: IStudent = req.body;
    const createStudent = new CreateStudentService();
    const result = await createStudent.execute({name, age, email, password});
    return res.status(201).json(result)
  }
}