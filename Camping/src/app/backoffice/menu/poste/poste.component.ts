import { Component, OnInit } from '@angular/core';
import { Camping } from 'src/app/class/camping';
import { PosteService } from 'src/app/service/poste.service';

import {AngularFireStorage} from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css']
})
export class PosteComponent implements OnInit {
   camp !: Camping ;
   lesCamping: Camping[] = [];
   url="../../../assets/white.jpg";
   campForm!:FormGroup;
   constructor(private posteService:PosteService,private fireStorage:AngularFireStorage,private fb:FormBuilder){
  
   }
  ngOnInit(): void {
    this.posteService.getCamping().subscribe(
      data=>this.lesCamping=data
    );
    this.campForm=this.fb.nonNullable.group({
        intitule:['',[Validators.required]],
        content:['',[Validators.required,Validators.minLength(25)]], 
        date:['',Validators.required],
        photo:['',Validators.required],
        nbplacelibre:[0,Validators.required],
        lieu:['',[Validators.required,Validators.minLength(2)]],
    })

  }
public get intitule(){
  return this.campForm.get('intitule');
}

public get content(){
  return this.campForm.get('content');
}

public get date(){
  return this.campForm.get('date');
}
public get photo(){
  return this.campForm.get('photo');
}
public get nbplacelibre(){
  return this.campForm.get('nbplacelibre');
}
public get lieu(){
  return this.campForm.get('lieu');
}
ObligatoireValidator(name:any){
  return name?.errors?.['required'] && name.dirty;
}
contentValidator(){
  return this.content?.errors?.['minlength'] && this.content.untouched; 
}


async onAjoute(){
  if(this.campForm.controls['intitule'].value=='' || this.campForm.controls['content'].value=='' || this.campForm.controls['nbplacelibre'].value=='' || this.campForm.controls['date'].value=='' || this.campForm.controls['lieu'].value==''){
    alert('Remplir le formulaire');
  
   }
   else{
    
  console.log(this.campForm.value);
  console.log(this.campForm.controls["intitule"].value);
  console.log(this.campForm.controls['photo'].value);

   const path="/files"+Math.random()+this.file;
  const upload=this.fireStorage.upload(path,this.file);
  const url=(await upload).ref.getDownloadURL();
  console.log(url);
  this.camp=this.campForm.value as Camping;
  console.log(url);
  this.camp.photo=await url;
 /* this.camp.photo=this.url;*/
 this.posteService.addCamping(this.camp).subscribe(
  data=>{
   this.lesCamping.push(data);
   alert('Remplissage succès');
   
 }
  );
  console.log(this.campForm.value)
}

   }
 

file:string | undefined;
onFileSelected($e:any){
 this.file=$e.target.files[0];
 console.log(this.file);
 var reader=new FileReader();
 reader.readAsDataURL($e.target.files[0]);
 reader.onload=(event:any)=>{
  this.url=event.target.result;
  console.log(this.url)
  
 }

 
}
 } 




