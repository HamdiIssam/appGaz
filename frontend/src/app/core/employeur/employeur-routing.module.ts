import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailClientComponent } from './dossier-client/detail-client/detail-client.component';
import { AddLivreurComponent } from './dossier-livreur/add-livreur/add-livreur.component';
import { ListLivreurComponent } from './dossier-livreur/list-livreur/list-livreur.component';
import { UpdateLivreurComponent } from './dossier-livreur/update-livreur/update-livreur.component';
import { AddProduitComponent } from './dossier-produit/add-produit/add-produit.component';
import { ListProduitComponent } from './dossier-produit/list-produit/list-produit.component';
import { UpdateProduitComponent } from './dossier-produit/update-produit/update-produit.component';
import { EmployeurComponent } from './employeur.component';
import { ListClientComponent } from './dossier-client/list-client/list-client.component';
import { ListCmdeComponent } from './dossier-commande/list-cmde/list-cmde.component';
import { UpdateCmdeComponent } from './dossier-commande/update-cmde/update-cmde.component';
import { AccueilComponent } from './accueil/accueil.component';


const routes: Routes = [
  {
    path: "", component: EmployeurComponent,
    children: [

      { path: "Accuiel", component: AccueilComponent},
      { path: "addLivreur", component: AddLivreurComponent },
      { path: "listLivreur", component: ListLivreurComponent },
      { path: "updateLivreur/:id", component: UpdateLivreurComponent },
      { path: "addProduit", component: AddProduitComponent },
      { path: "listProduit", component: ListProduitComponent },
      { path: "updateProduit/:id", component: UpdateProduitComponent },
      { path: "listClient", component: ListClientComponent },
      { path: "detail-client/:id", component: DetailClientComponent },
      { path: "listCommande", component:ListCmdeComponent },
      { path: "updateCommande/:id", component:UpdateCmdeComponent },

    ]
  },






];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeurRoutingModule { }
