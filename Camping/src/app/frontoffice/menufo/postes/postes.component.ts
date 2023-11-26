import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Camping } from 'src/app/class/camping';
import { PosteService } from 'src/app/service/poste.service';

@Component({
  selector: 'app-postes',
  templateUrl: './postes.component.html',
  styleUrls: ['./postes.component.css']
})
export class PostesComponent implements OnInit {
  lesCamping: Camping[] = [];
  filtertab:Camping[]=[];
  actif!: number ;
  searchform!:FormGroup;
  constructor(private posteService: PosteService,private fb:FormBuilder) {}
  
  ngOnInit(): void {
    this.posteService.getCamping().subscribe(
      data => {this.lesCamping = data
                this.filtertab=this.lesCamping
      }
    );
    this.searchform=this.fb.nonNullable.group({
     date:[''],
     intitule:['']
    })
  }
  onSearch(){
    console.log(this.searchform.controls['intitule'].value)
    
   this.filtertab=this.lesCamping.filter(e=> e.intitule.toLowerCase().includes(this.searchform.controls['intitule'].value.toLocaleLowerCase()) && this.searchform.controls['date'].value<=e.date)
    
  }
  Reset(){
    this.filtertab=this.lesCamping;
    this.searchform.reset();
  }
}