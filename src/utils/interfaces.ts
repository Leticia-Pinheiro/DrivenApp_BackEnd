import { users, userTypes } from "@prisma/client"

export type TypeUser = Omit<users, 'id' |  'createdAt'>

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