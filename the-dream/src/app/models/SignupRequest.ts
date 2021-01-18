export class SignupRequest{
    name:string;
    username: string;
    password: string;
    email: string;
    role:string[];
    constructor(name:string,username:string, password:string, email:string, role:string[]){
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
    }
}