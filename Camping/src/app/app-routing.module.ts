import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosteComponent } from './backoffice/menu/poste/poste.component';
import { MyposteComponent } from './backoffice/menu/myposte/myposte.component';
import { MoncompteComponent } from './backoffice/menu/moncompte/moncompte.component';
import { ErreurComponent } from './erreur/erreur.component';
import { ModifierComponent } from './backoffice/menu/myposte/modifier/modifier.component';
import { LoginComponent } from './backoffice/login/login.component';
import { HomeComponent } from './frontoffice/menufo/home/home.component';
import { PostesComponent } from './frontoffice/menufo/postes/postes.component';
import { MenuComponent } from './backoffice/menu/menu.component';
import { MenufoComponent } from './frontoffice/menufo/menufo.component';
import { authGuard } from './guard/auth.guard';
import { CommentaireComponent } from './frontoffice/menufo/postes/commentaire/commentaire.component';
import { InscriptionComponent } from './frontoffice/menufo/postes/inscription/inscription.component';
import { CommentsbfComponent } from './backoffice/menu/myposte/commentsbf/commentsbf.component';


const routes: Routes = [
  {path:'menubo',title:'MenuBO',component:MenuComponent,children:[
    {path:'poste',title:'Poste',component:PosteComponent},
    {path:'monposte',title:'MonPoste',component:MyposteComponent},
    {path:'monposte/comments/:identif2',title:'Comments',component:CommentsbfComponent},
    {path:'monposte/modifier/:identif',title:'Modification',component:ModifierComponent},
    {path:'moncompte',title:'MonCompte',component:MoncompteComponent},
    {path:'',redirectTo:'poste',pathMatch:'full'}
  ],canActivate:[authGuard]},
  {path:'menufo',title:'MenuFO',component:MenufoComponent,children:[
    {path:'home',title:'Home',component:HomeComponent},
    {path:'postes',title:'Postes',component:PostesComponent},
    {path:'postes/commentaire/:id',title:'Commentaire',component:CommentaireComponent},
    {path:'postes/inscription/:ide',title:'Inscription',component:InscriptionComponent},
    {path:'',redirectTo:'home',pathMatch:'full'}
  ]},
  {path:'login',title:'Login',component:LoginComponent},
  {path:'',redirectTo:'menufo',pathMatch:'full'},
  {path:'**',title:'Erreur',component:ErreurComponent}
/*

  {path:'poste',title:'Poste',component:PosteComponent},
  {path:'monposte',title:'MonPoste',component:MyposteComponent},
  {path:'moncompte',title:'MonCompte',component:MoncompteComponent},
 
  {path:'login',title:'Login',component:LoginComponent},
   {path:'',redirectTo:'home',pathMatch:'full'},
   {path:'**',title:'Erreur',component:ErreurComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
