import { logging } from "protractor";

export class User{
    id:number;
    name:string;
    username: string;
    password: string;
    email: string;
    role:string[];
    constructor(id:number,name:string,username:string, password:string, email:string, role:string[]){
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
    }
}