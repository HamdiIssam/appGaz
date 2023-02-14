import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent } from './note/note.component';

import { ProffesseurComponent } from './proffesseur.component';

const routes: Routes = [
  {path :'', component:ProffesseurComponent , children :[
    {path:'note',component:NoteComponent},
    
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProffesseurRoutingModule { }
