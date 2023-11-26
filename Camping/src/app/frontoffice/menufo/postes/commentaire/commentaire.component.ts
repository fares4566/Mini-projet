import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Camping } from 'src/app/class/camping';
import { Commentaire } from 'src/app/class/commentaire';
import { PosteService } from 'src/app/service/poste.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit{
  lesCamping:Camping[]=[];
  idcamp!:number;
  newcommentire:Commentaire | undefined;
  camp: Camping | undefined ;
  commentForm!:FormGroup;
  constructor(private activatedRoute:ActivatedRoute,private posteService:PosteService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.idcamp=this.activatedRoute.snapshot.params["id"];
    this.posteService.getCamping().subscribe(
      data=>{this.lesCamping=data;
        this.camp=this.lesCamping.find(e=>e.id===Number(this.idcamp));
      }
    );
    this.commentForm=this.fb.nonNullable.group({
     nom:[''],
     message:['']
    })
  }
  onEnvoyer() {
    console.log("this.commentForm.controls['nom']")
    for (let i = 0; i < this.lesCamping.length; i++) {
      if (this.idcamp == this.lesCamping[i].id) {
 
        if (!this.lesCamping[i].comments) {
          this.lesCamping[i].comments = [];
        }
 
        const newCommentaire = new Commentaire(this.commentForm.controls['nom'].value,this.commentForm.controls['message'].value);
        this.lesCamping[i].comments?.push(newCommentaire);
  
        this.posteService.UpdateCamp(this.lesCamping[i]).subscribe(() => {
          console.log('Camping updated:', this.lesCamping[i]);
        });
    
 
 
  
}
 
  }
  this.commentForm.reset();
}

}
