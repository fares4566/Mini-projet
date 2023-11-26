import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Camping } from 'src/app/class/camping';
import { Inscription } from 'src/app/class/inscription';
import { PosteService } from 'src/app/service/poste.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  lescamping:Camping[]=[];
  idcamp:number=0;
  Camp!:Camping;

  campForm!:FormGroup;
  constructor(private activatedRoute:ActivatedRoute,private posteService:PosteService,private fb:FormBuilder){
    
  }
  ngOnInit(): void {
    this.idcamp = this.activatedRoute.snapshot.params['identif'];
    this.posteService.getCamping().subscribe(
      data => {
        this.lescamping = data;
        for (let i = 0; i < this.lescamping.length; i++) {
          if (this.lescamping[i].id == this.idcamp) {
            this.Camp = this.lescamping[i];
              this.campForm = this.fb.group({
                intitule: [this.Camp.intitule,Validators.required],
                content: [this.Camp.content,[Validators.required,Validators.minLength(25)]],
                nbplacelibre: [this.Camp.nbplacelibre,Validators.required],
                date: [this.Camp.date,Validators.required],
                lieu: [this.Camp.lieu,[Validators.required,Validators.minLength(2)]],
              });
            
            break;
          }
        }
      }
    );
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

  
  
  onSubmit(){
    if(this.campForm.controls['intitule'].value=='' || this.campForm.controls['content'].value=='' || this.campForm.controls['nbplacelibre'].value=='' || this.campForm.controls['date'].value=='' || this.campForm.controls['lieu'].value==''){
      alert('Remplir le formulaire');
    
     }
     else{
      this.Camp.intitule=this.intitule?.value;
      this.Camp.content=this.content?.value;
      this.Camp.nbplacelibre=this.nbplacelibre?.value;
      this.Camp.date=this.date?.value;
      this.Camp.lieu=this.lieu?.value;
      this.posteService.UpdateCamp(this.Camp).subscribe(
        data=>{
          for(let i=0;i<this.lescamping.length;i++){
            if(this.lescamping[i].id==this.idcamp)
            this.lescamping[i]=this.Camp;
        }
        alert('Modification succès');
      }
      )
     }
     }
  }
  
  
  
  
  
  
    
  

 


