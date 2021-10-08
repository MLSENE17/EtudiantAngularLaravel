import { NgModule } from '@angular/core';
import { BrowserModule,Title } from '@angular/platform-browser';
import {   HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EtudiantService } from './Service/Etudiant/etudiant.service';
import { Etudiant } from './Models/Etudiant';
import { EditComponent } from './etudiant/edit/edit.component';
import { NewetudiantComponent } from './etudiant/newetudiant/newetudiant.component';
import { HostNameService } from './Service/Etudiant/host-name.service';
import { ShowComponent } from './etudiant/show/show.component';
import { ClasseComponent } from './classe/classe.component';
import { Classe } from './Models/Classe';
import { ClasseService } from './Service/Classe/classe.service';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    EditComponent,
    NewetudiantComponent,
    ShowComponent,
    ClasseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Title,
    EtudiantService,
    Etudiant,
    HostNameService,
    Classe,
    ClasseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
