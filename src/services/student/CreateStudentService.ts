import { prisma } from "../../prisma/client";

export interface IStudent {
  id?: string;
  name: string;
  age: number;
  email: string;
  password: string
}

export class CreateStudentService {
  async execute({name, age, email, password}: IStudent) {
    const checkIfEmailExists = await prisma.student.findUnique({
      where: {
        email
      }
    })

    if(checkIfEmailExists) {
      throw new Error("Email already exists")
    }

    const student = await prisma.student.create({
      data: {
        name: name,
        age: age,
        email: email,
        password: password
      }
    })
    
    return student;
  }
}