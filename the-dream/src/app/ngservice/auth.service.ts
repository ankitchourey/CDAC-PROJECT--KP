import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignupRequest } from '../models/SignupRequest';
import { LoginRequest } from '../models/LoginRequest';
import { User } from '../models/User';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: LoginRequest): Observable<any> {
    return this.http.post(AUTH_API + 'signin', credentials, httpOptions);
  }

  register(user: SignupRequest): Observable<any> {
    return this.http.post(AUTH_API + 'signup',user, httpOptions);
  }

editUser(user: User):Observable<any>{
  return this.http.put("http://localhost:8080/user/update",user);
}

}