import { users, userTypes, groups } from "@prisma/client"

export type TypeUser = Omit<users, 'id' |  'createdAt'>

export type TypeGroup = Omit <groups, 'id'>

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