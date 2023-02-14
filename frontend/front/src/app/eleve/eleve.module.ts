import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EleveRoutingModule } from './eleve-routing.module';
import { EleveComponent } from './eleve.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EleveServiceService } from './eleve-service.service';
import { ClasseService } from '../admin/classe/classe.service';
import { ProfServiceService } from '../proffesseur/prof-service.service';
import { ServiceService } from '../admin/matiere/service.service';
import { NoteServiceService } from '../proffesseur/note/note-service.service';
import { EmploiServiceService } from '../admin/modelEmploi/emploi-service.service';
// import { ClasseService } from '../admin/classe/service.service';


@NgModule({
  declarations: [
    EleveComponent
  ],
  imports: [
    CommonModule,
    EleveRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[HttpClient,ProfServiceService,ServiceService,
    EmploiServiceService,ClasseService,NoteServiceService,
    EleveServiceService]
})

export class EleveModule { }