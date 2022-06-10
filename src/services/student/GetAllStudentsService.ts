import { prisma } from "../../prisma/client";

export class GetAllStudentsService {
  async execute() {
    const students = await prisma.student.findMany({
      orderBy: {
        name: "desc",
      },
      include: {
        teachers: {
          select: {
            name: true,
            email: true
          }
        }
      },
    });
    return students;
  }
}