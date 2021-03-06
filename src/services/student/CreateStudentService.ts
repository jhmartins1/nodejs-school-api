import { prisma } from "../../prisma/client";

export interface IStudent {
  id?: string;
  name: string;
  age: number;
  email: string;
  password: string
}

export class CreateStudentService {
  async execute({name, age, email, password}: IStudent): Promise<IStudent | Error> {

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

    if(checkIfEmailExists) {
      return new Error("Email already using!")
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