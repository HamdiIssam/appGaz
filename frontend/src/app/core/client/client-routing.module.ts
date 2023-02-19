import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { ClientComponent } from './client.component';
import { CommandeComponent } from './commande/commande.component';
import { DetailCommandeComponent } from './detail-commande/detail-commande.component';
import { ListCommandeComponent } from './list-commande/list-commande.component';
import { UpdateClientComponent } from './update-client/update-client.component';


const routes: Routes = [
  {path:"",component:ClientComponent ,
children:[
  { path: "addCommande/:id", component: AddCommandeComponent },
  { path: "list-cmdClient/:id", component: ListCommandeComponent },
  { path: "updateClient/:id", component: UpdateClientComponent },
  { path: "detail Commande/:id", component:DetailCommandeComponent },
  { path: "commande", component:CommandeComponent},
]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
