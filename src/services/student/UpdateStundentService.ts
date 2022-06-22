import { prisma } from "../../prisma/client";
import { IStudent } from "./CreateStudentService";

export class UpdateStundentService {
  async execute({name, age, email, password, id}: IStudent): Promise<IStudent | null | Error> {

    if(!name) {
      return new Error("Name is missing!");
    }

    if(!age) {
      return new Error("Age is missing!");
    }

    if(!password) {
      return new Error("Password is missing!");
    }

    if(!email) {
      return new Error("Email is missing!");
    }
    
    const checkIfEmailExists = await prisma.student.findUnique({
      where: {
        email
      }
    })

  if(checkIfEmailExists && email !== email) {
    return new Error("Email already exists!")
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