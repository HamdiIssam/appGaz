import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSocieteComponent } from './add-societe/add-societe.component';
import { LoginsocieteComponent } from './loginsociete/loginsociete.component';
import { UpdateSocieteComponent } from './update-societe/update-societe.component';

const routes: Routes = [
  {path:'login',component:LoginsocieteComponent},
  {path:'addSociete',component:AddSocieteComponent},
 { path:'updateSociete/:id',component:UpdateSocieteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocieteRoutingModule { }
