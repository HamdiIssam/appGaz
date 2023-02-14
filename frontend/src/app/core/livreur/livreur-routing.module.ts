import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCmdLivreurComponent } from './list-cmd-livreur/list-cmd-livreur.component';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { LoginLivreurComponent } from './login-livreur/login-livreur.component';

const routes: Routes = [
  {path:"login",component:LoginLivreurComponent},
  {path:"list-cmdLivreur/:id",component:ListCmdLivreurComponent},
  {path:"listFacture",component:ListFactureComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivreurRoutingModule { }
