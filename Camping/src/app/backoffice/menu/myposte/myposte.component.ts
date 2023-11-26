import { Component, OnInit } from '@angular/core';
import { Camping } from 'src/app/class/camping';
import { PosteService } from 'src/app/service/poste.service';

@Component({
  selector: 'app-myposte',
  templateUrl: './myposte.component.html',
  styleUrls: ['./myposte.component.css']
})
export class MyposteComponent implements OnInit {
 
  lesCamping: Camping[] = [];
  filteredTab:Camping[]= [];


  constructor(private posteService: PosteService) {}

  ngOnInit(): void {
  this.posteService.getCamping().subscribe(
    data=>{this.lesCamping=data;
      this.filteredTab=this.lesCamping;
     
    }
  );
  }
onSupprimer(id:number){
  this.posteService.DeleteCamp(id).subscribe(
    data=>this.filteredTab=this.filteredTab.filter(e=> e.id!=id)
  );
  alert("l'activité est supprimer")
}
onRecherche(chaine: string){
  this.filteredTab=this.lesCamping.filter((e)=>
    e.intitule.toLowerCase().includes(chaine.toLocaleLowerCase())
  )
  }
 
 

}



