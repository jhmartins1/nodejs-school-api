import { Request, Response } from "express";
import { UpdateStundentService } from "../../services/student/UpdateStundentService";

export class UpdateStudentController {
  async handle(req: Request, res: Response) {
    const {id} = req.params;
    const {name, age, email, password} = req.body;
    const updateStudent = new UpdateStundentService();

    const result = updateStudent.execute({id, name, age, email, password});
    console.log(result);
    return res.status(200).json(result);
  }
}