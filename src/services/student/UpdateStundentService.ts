import { prisma } from "../../prisma/client";
import { IStudent } from "./CreateStudentService";

export class UpdateStundentService {
  async execute({name, age, email, password, id}: IStudent): Promise<IStudent | null> {
    const checkIfEmailExists = await prisma.student.findUnique({
      where: {email}
    })

  if(checkIfEmailExists) {
    throw new Error("Email already exists!")
  }

  const student = await prisma.student.update({
    where: {
      id
    },
    data: {
      name,
      age,
      email,
      password
    }
  })

  return student;
  }
}