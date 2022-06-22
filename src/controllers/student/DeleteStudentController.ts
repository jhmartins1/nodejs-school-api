import { Request, Response } from "express";
import { DeleteStudentService } from "../../services/student/DeleteStudentService";

export class DeleteStudentController {
  async handle(req: Request, res: Response) {
    const {id} = req.params
    const deleteStudent = new DeleteStudentService();
    const result = await deleteStudent.execute(id);

    if(result instanceof Error) {
      return res.status(404).json(result.message)
    }

    return res.json(`Student ${id} Deleted`);
  }
}