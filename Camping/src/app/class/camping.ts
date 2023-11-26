import { Commentaire } from "./commentaire";
import { Inscription } from "./inscription";

export class Camping {
         get: any;
  
         constructor(
         public id:number,
         public intitule:string,
         public content:string, 
         public date:Date,
         public photo:string,
         public nbplacelibre:number,
         public lieu:string,
         public full:boolean,
         public comments?:Commentaire[],
        public inscription?:Inscription[]){}

        }

