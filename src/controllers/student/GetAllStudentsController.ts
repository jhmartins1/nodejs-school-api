import { Request, Response } from "express";
import { GetAllStudentsService } from "../../services/student/GetAllStudentsService";

export class GetAllStudentsController {
  async handle(req: Request, res: Response) {
    const getAllStudentsService = new GetAllStudentsService();
    const result = await getAllStudentsService.execute();
    return res.status(200).json(result);
  }
}