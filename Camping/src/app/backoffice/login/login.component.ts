import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/class/auth';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  u!:Auth;
constructor(private router:Router,private authService:AuthService){}
  ngOnInit(): void {
    this.authService.getAuth().subscribe(
      data=>this.u=data
    );
  }
login(user:string,pwd:string){
  if(this.authService.login(user,pwd,this.u.username,this.u.password)){
    this.router.navigate(['/menubo']);
  }
  else
alert("Login ou mot de passe incorrect"); 
}
}
