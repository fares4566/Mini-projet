import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './backoffice/menu/menu.component';
import { PosteComponent } from './backoffice/menu/poste/poste.component';
import { MyposteComponent } from './backoffice/menu/myposte/myposte.component';
import { MoncompteComponent } from './backoffice/menu/moncompte/moncompte.component';
import { ErreurComponent } from './erreur/erreur.component';
import {HttpClientModule} from '@angular/common/http';
import { ModifierComponent } from './backoffice/menu/myposte/modifier/modifier.component';
import { LoginComponent } from './backoffice/login/login.component';
import { MenufoComponent } from './frontoffice/menufo/menufo.component';
import { HomeComponent } from './frontoffice/menufo/home/home.component';
import { PostesComponent } from './frontoffice/menufo/postes/postes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import { CommentaireComponent } from './frontoffice/menufo/postes/commentaire/commentaire.component';
import { InscriptionComponent } from './frontoffice/menufo/postes/inscription/inscription.component';
import { CommentsbfComponent } from './backoffice/menu/myposte/commentsbf/commentsbf.component';
import { CelsiusPipe } from './pipe/celsius.pipe';




@NgModule({
  declarations: [
    AppComponent,
  
    MenuComponent,
    PosteComponent,
    MyposteComponent,
    MoncompteComponent,
    ErreurComponent,
    ModifierComponent,
    LoginComponent,
    MenufoComponent,
    HomeComponent,
    PostesComponent,
    CommentaireComponent,
    InscriptionComponent,
    CommentsbfComponent,
    CelsiusPipe,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp({apiKey: "AIzaSyC-PHRJiIIh1s0zAeNbGmPTFiVJ9gPu7dM",
    authDomain: "campingimages-a3a25.firebaseapp.com",
    projectId: "campingimages-a3a25",
    storageBucket: "campingimages-a3a25.appspot.com",
    messagingSenderId: "1037815122484",
    appId: "1:1037815122484:web:9060911cf7455c7dba5861",
    measurementId: "G-NRJ15FZNTD"}),
    AngularFireStorageModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
