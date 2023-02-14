import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ClasseService } from './classe/classe.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ClasseComponent } from './classe/classe.component';
import { MatiereComponent } from './matiere/matiere.component';
import { ServiceService } from './matiere/service.service';
import { EmploiServiceService } from './modelEmploi/emploi-service.service';
import { ProfServiceService } from '../proffesseur/prof-service.service';
import { EmploiComponent } from './emploi/emploi.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { EleveServiceService } from '../eleve/eleve-service.service';
import { NoteServiceService } from '../proffesseur/note/note-service.service';

import { AdminestrationComponent } from './adminestration/adminestration.component';
import { HomeworkService } from '../proffesseur/homework/homework.service';
import { PresenservicesService } from '../proffesseur/presence/presenservices.service';


import { PinalitemodelService } from '../proffesseur/pinalit1/pinalitemodel.service';






@NgModule({
  declarations: [
    AdminComponent,
    ClasseComponent,
    MatiereComponent,
    EmploiComponent,
    SidebarComponent,
    DashbordComponent,
    AdminestrationComponent,
   

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
    
  ],

    providers:[HttpClient, ClasseService,NoteServiceService,
      ServiceService,EmploiServiceService,EleveServiceService,
      ProfServiceService ,HomeworkService,PresenservicesService,PinalitemodelService]
})
export class AdminModule { }
