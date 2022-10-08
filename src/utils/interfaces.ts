import { users, userTypes, groups, teachers, tutors, students, modules, contents, projects, notes, notesOptions } from "@prisma/client"

export type TypeUser = Omit<users, 'id' |  'createdAt'>

export type TypeGroup = Omit <groups, 'id'>

export type TypeTeacher = Omit<teachers, 'id'>

export type TypeTutor = Omit<tutors, 'id'>

export type TypeStudent = Omit<students, 'id'>

export type TypeModule = Omit<modules, 'id'>

export type TypeContents = Omit<contents, 'id'>

export type TypeProject = Omit<projects, 'id'>

export type TypeNote = Omit<notes, 'id'>


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