import { users, userTypes, groups, teachers, tutors, students } from "@prisma/client"

export type TypeUser = Omit<users, 'id' |  'createdAt'>

export type TypeGroup = Omit <groups, 'id'>

export type TypeTeacher = Omit<teachers, 'id'>

export type TypeTutor = Omit<tutors, 'id'>

export type TypeStudent = Omit<students, 'id'>


export interface IBodySignUp
    {
        name: string;
        email: string;
        password: string;
        confirmedPassword: string;
        type: userTypes;
    }

export interface IBodySignIn
    {
        email: string;
        password: string;        
    }