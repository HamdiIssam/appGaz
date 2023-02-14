import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient,HttpClientModule}from '@angular/common/http';
import { ProffesseurRoutingModule } from './proffesseur-routing.module';
import { ProffesseurComponent } from './proffesseur.component';
import { ProfServiceService } from './prof-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from '../admin/matiere/service.service';
import { NoteComponent } from './note/note.component';
import { EmploiServiceService } from '../admin/modelEmploi/emploi-service.service';
import { ClasseService } from '../admin/classe/classe.service';
import { NoteServiceService } from './note/note-service.service';
import { EleveServiceService } from '../eleve/eleve-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeworkService } from './homework/homework.service';




import { Pinalit1Component } from './pinalit1/pinalit1.component';
import { HomeworkComponent } from './homework/homework.component';
import { PresenceComponent } from './presence/presence.component';

import { NavbarComponent } from './navbar/navbar.component';
import { PinalitemodelService } from './pinalit1/pinalitemodel.service';




@NgModule({
    declarations: [
        ProffesseurComponent,
        NoteComponent,
        Pinalit1Component,
        HomeworkComponent,
        PresenceComponent,
        NavbarComponent
    ],
    providers: [HttpClient, ProfServiceService, ServiceService,
        EmploiServiceService, ClasseService, NoteServiceService,
        EleveServiceService, HomeworkService,PinalitemodelService],
    imports: [
        CommonModule,
        ProffesseurRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule,
       
    ]
})
export class ProffesseurModule { }
