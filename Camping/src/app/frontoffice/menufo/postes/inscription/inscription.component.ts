import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Camping } from 'src/app/class/camping';
import { Inscription } from 'src/app/class/inscription';
import { PosteService } from 'src/app/service/poste.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit{
  idcamp!:number;
  lesCamping:Camping[]=[];
  camp:Camping | undefined;
  inscriptionForm!:FormGroup;

constructor(private activatedRoute:ActivatedRoute,private posteService:PosteService,private fb:FormBuilder){
  
}
  ngOnInit(): void {
    this.idcamp=this.activatedRoute.snapshot.params["ide"];
    this.posteService.getCamping().subscribe(
      data=>{this.lesCamping=data;
        this.camp=this.lesCamping.find(e=>e.id===Number(this.idcamp));
      
      }
    );
   this.inscriptionForm=this.fb.group({
    nom:['',[Validators.required]],
    prenom:['',[Validators.required]],
    ville:['',[Validators.required,Validators.minLength(3)]],
    genre:['Male'],
    date:['',Validators.required],
    nbt:['',[Validators.required,Validators.pattern('^[0-9]{8}$')]],
    email:['',[Validators.required,Validators.email]],
   })
  }
  public get nom(){
    return this.inscriptionForm.get('nom');
  }
  public get prenom(){
    return this.inscriptionForm.get('prenom');
  }
  public get ville(){
    return this.inscriptionForm.get('ville');
  }
  public get date(){
    return this.inscriptionForm.get('date');
  }
  public get nbt(){
    return this.inscriptionForm.get('nbt');
  }
  public get email(){
    return this.inscriptionForm.get('email');
  }
  VilleValidator(){
    return this.ville?.errors?.['minlength'] && this.ville.dirty;
  }
  NbtValidator(){
    return this.nbt?.errors?.['pattern'] && this.nbt?.dirty;
  }
  ObligatoireValidator(name:any){
    return name?.errors?.['required'] && name.dirty;
  }
  EmailValidator(){
    return this.email?.errors?.['email'] && this.email.touched;
  }

  onAjoute(){
  
    for (let i = 0; i < this.lesCamping.length; i++) {
      if (this.idcamp == this.lesCamping[i].id) {
 
        if (!this.lesCamping[i].inscription) {
          this.lesCamping[i].inscription = [];
        }
       
        this.lesCamping[i].inscription?.push(this.inscriptionForm.value);
        this.lesCamping[i].nbplacelibre--;
        this.posteService.UpdateCamp(this.lesCamping[i]).subscribe(() => {
          console.log('Camping updated:', this.lesCamping[i]);
          
        });

        alert('inscription succès')
    this.inscriptionForm.reset({});
  }
    }
    
  }
}