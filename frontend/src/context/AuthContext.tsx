import { createContext } from "react";
type User={
    name: string;
    email: string;
}
type UserAuth={
    isLoggedin:boolean;
    user: User| null;
    login:(email:string, password: string)=>Promise<void>
    
}
const AuthContext=createContext(null)