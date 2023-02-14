import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeurRoutingModule } from './employeur-routing.module';
import { AddLivreurComponent } from './dossier-livreur/add-livreur/add-livreur.component';
import { ListLivreurComponent } from './dossier-livreur/list-livreur/list-livreur.component';
import { UpdateLivreurComponent } from './dossier-livreur/update-livreur/update-livreur.component';
import { AddProduitComponent } from './dossier-produit/add-produit/add-produit.component';
import { UpdateProduitComponent } from './dossier-produit/update-produit/update-produit.component';
import { ListProduitComponent } from './dossier-produit/list-produit/list-produit.component';
import { ListClientComponent } from './dossier-client/list-client/list-client.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetailClientComponent } from './dossier-client/detail-client/detail-client.component';
import { EmployeurComponent } from './employeur.component';
import { ListCmdeComponent } from './dossier-commande/list-cmde/list-cmde.component';
import { UpdateCmdeComponent } from './dossier-commande/update-cmde/update-cmde.component';
import { AccueilComponent } from './accueil/accueil.component';






@NgModule({
  declarations: [
    AddLivreurComponent,
    ListLivreurComponent,
    UpdateLivreurComponent,
    AddProduitComponent,
    UpdateProduitComponent,
    ListProduitComponent,
    ListClientComponent,
    DetailClientComponent,
    EmployeurComponent,
    ListCmdeComponent,
    UpdateCmdeComponent,
    AccueilComponent,


  ],
  imports: [
    CommonModule,
    EmployeurRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class EmployeurModule { }
