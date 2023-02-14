import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EleveComponent } from '../eleve/eleve.component';
import { NoteComponent } from '../proffesseur/note/note.component';
import { ProffesseurComponent } from '../proffesseur/proffesseur.component';
import { AdminComponent } from './admin.component';
import { ClasseComponent } from './classe/classe.component';
import { MatiereComponent } from './matiere/matiere.component';
import { EmploiComponent } from './emploi/emploi.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AdminestrationComponent } from './adminestration/adminestration.component';

import { Pinalit1Component } from '../proffesseur/pinalit1/pinalit1.component';
import { HomeworkComponent } from '../proffesseur/homework/homework.component';
import { PresenceComponent } from '../proffesseur/presence/presence.component';


const routes: Routes = [

  {path :'admin', component:AdminComponent , children :[
    {path :'eleve' , component : EleveComponent},
    {path :'adm' , component : AdminestrationComponent},
    {path :'dash' , component : DashbordComponent},
    {path :'prof' , component :ProffesseurComponent},
    {path :'prof/:id' , component :NoteComponent},
    {path :'pinalite/:id' , component :Pinalit1Component},
    {path :'homework/:id' , component :HomeworkComponent},
    {path :'presence/:id' , component :PresenceComponent},

    {path : 'matiere' , component : MatiereComponent},
    {path :'classe' , component : ClasseComponent},
    {path :'emploi' , component : EmploiComponent},



  ]},


];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
