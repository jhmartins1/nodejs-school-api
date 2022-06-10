import { prisma } from "../../prisma/client";

export class GetOneStudentService {
  async execute(id) {
    const studentId = await prisma.student.findUnique({
      where: {
        id
      }
    });
    return studentId
  }
}