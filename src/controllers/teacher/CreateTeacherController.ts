import { Request, Response } from "express";
import { CreateTeacherService } from "../../services/teacher/CreateTeacherService";

export class CreateTeacherController {
  async handle(req: Request, res: Response) {
    const {name, age, email, password, subjects} = req.body;
    const createTeacher = new CreateTeacherService();
    const result = await createTeacher.execute({name, age, email, password, subjects});

    if(result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(201).json(result)
  }
}