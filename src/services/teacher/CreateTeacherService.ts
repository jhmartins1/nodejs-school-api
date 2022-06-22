import { prisma } from "../../prisma/client";
import { ITeacher } from "../../utils/TeacherUtils";

export class CreateTeacherService {
  async execute({name, age, email, password, subjects}: ITeacher) {
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

    if(!subjects) {
      return new Error("Email is missing!");
    }

    const checkIfEmailExists = await prisma.teacher.findUnique({
      where: {
        email
      }
    })

    if(checkIfEmailExists) {
      return new Error("Email already using.")
    }

    const teacher = await prisma.teacher.create({
      data: {
        name: name,
        age: age,
        email: email,
        password: password,
        Subjects: subjects
      }
    })

    return teacher;
  }
}