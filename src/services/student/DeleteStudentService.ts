import { prisma } from "../../prisma/client";

export class DeleteStudentService {
  async execute(id) {
    const studentId = await prisma.student.findUnique({
      where: {
        id
      }
    });

    if(!studentId) {
      return new Error("Student not found!");
    }

    return await prisma.student.delete({
      where: {
        id: studentId.id
      }
    })
  } 
}