import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camping } from 'src/app/class/camping';
import { PosteService } from 'src/app/service/poste.service';

@Component({
  selector: 'app-commentsbf',
  templateUrl: './commentsbf.component.html',
  styleUrls: ['./commentsbf.component.css']
})
export class CommentsbfComponent {
  lesCamping:Camping[]=[];
  idcamp:number=0;
  Camp:Camping | undefined;

  
  constructor(private activatedRoute:ActivatedRoute,private posteService:PosteService){
    
  }
  ngOnInit(): void {
    this.idcamp = this.activatedRoute.snapshot.params['identif2'];
    this.posteService.getCamping().subscribe(
      data => {
        this.lesCamping = data;
        this.Camp=this.lesCamping.find(e=>e.id===Number(this.idcamp));
      }
    )
  }
  onDelete(nb:number){
    if (this.Camp && Array.isArray(this.Camp.comments)) {
      for (let i = nb; i < this.Camp.comments.length-1; i++) {
       
          this.Camp.comments[i]=this.Camp.comments[i+1];
        
      }
      this.Camp.comments.pop();
      this.posteService.UpdateCamp(this.Camp).subscribe()
    }
  
}
}
