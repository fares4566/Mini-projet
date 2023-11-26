import { Injectable, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Auth } from './class/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthhService implements OnInit{
  user!:Auth;
  constructor(private authService:AuthService) { }
  ngOnInit(): void {
    this.authService.getAuth().subscribe(
      data=>this.user=data
     
    );
  }
  public login(username:string,pwd:string){
console.log(this.user);
    if(username==this.user.username && pwd==this.user.password){
      localStorage.setItem('state','connected');
      return true;
    }
    else
    {
      localStorage.setItem('state','disconnected');
      return false;
    }
  }
  public modifier(user:string,pwd:string){
    this.user.username=user;
    this.user.password=pwd;
  }
  public logout(){
    localStorage.removeItem('state');
  }
}
