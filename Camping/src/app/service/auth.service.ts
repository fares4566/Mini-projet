import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../class/auth';
const URL="http://localhost:3000/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  getAuth():Observable<Auth>{
    return this.http.get<Auth>(URL);
  }
  updateAuth(a:Auth):Observable<Auth>{
    return this.http.put<Auth>(URL,a);
  }

  /*public getUser(){
    return this.user;
  }
  public getPwd(){
    return this.pwd;
  }*/

  public login(user:string,pwd:string,username:string,password:string){
    if(user==username && pwd==password){
      localStorage.setItem('state','connected');
      return true;
    }
    else
    {
      localStorage.setItem('state','disconnected');
      return false;
    }
  }
 
  public logout(){
    localStorage.removeItem('state');
  }
}
