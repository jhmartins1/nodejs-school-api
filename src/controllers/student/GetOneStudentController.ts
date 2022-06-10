import { Request, Response } from "express";
import { GetOneStudentService } from "../../services/student/GetOneStudentService";

export class GetOneStudentController {
  async handle(req: Request, res: Response) {
    const {id} = req.params;
    const getOneStudent = new GetOneStudentService();
    const getOneStudentById = await getOneStudent.execute(id);

    return res.status(200).json(getOneStudentById);
  }
}