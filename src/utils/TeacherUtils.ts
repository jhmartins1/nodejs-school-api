import { Student } from "@prisma/client";

export interface ITeacher {
  id?: string;
  name: string;
  age: number;
  email: string;
  password: string;
  subjects: string;
}