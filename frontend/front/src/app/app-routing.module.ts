import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

   {path:'eleve',loadChildren:()=>import('./eleve/eleve.module').then((m)=>m.EleveModule)},
 {path:'prof',loadChildren:()=>import('./proffesseur/proffesseur.module').then((m)=>m.ProffesseurModule)},
  {path:'',loadChildren:()=>import('./admin/admin.module').then((m)=>m.AdminModule)}

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
