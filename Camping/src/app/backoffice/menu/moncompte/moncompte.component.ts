import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Auth } from 'src/app/class/auth';

import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-moncompte',
  templateUrl: './moncompte.component.html',
  styleUrls: ['./moncompte.component.css']
})
export class MoncompteComponent implements OnInit {
  Input1 = true;
  Input2 = true;
  isPassword = true;
  user!:string;
  pwd!:string;
  u!:Auth;
  authForm!:FormGroup;
  constructor(private authService:AuthService,private fb:FormBuilder){
   
    
  }
  ngOnInit(): void {
    this.authService.getAuth().subscribe(
      data=>{this.u=data;
        console.log(this.u)
      }
    );
    this.authForm=this.fb.nonNullable.group({
      password:['',[Validators.required,Validators.minLength(8)]],
      password2:['',[Validators.required,Validators.minLength(8)]],

    })
  }

  public get myPassword2(){
    return this.authForm.get('password2');
  }
  public get myPassword(){
    return this.authForm.get('password');
  }
  onUpdate(){

    if(this.myPassword?.value!=this.myPassword2?.value){
      alert("La confirmation  n'correctement pas correct. ");
    }
    else
    if(this.myPassword?.value==this.u.password){
      alert("Même mot de passe existant")
    }
    else{
     this.u.password=this.myPassword?.value;
    this.authService.updateAuth(this.u).subscribe()

    alert('modification succès');
    this.authForm.reset();
    }
  }
}
