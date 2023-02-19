import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ListCommandeComponent } from './list-commande/list-commande.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateClientComponent } from './update-client/update-client.component';
import { DetailCommandeComponent } from './detail-commande/detail-commande.component';
import { CommandeComponent } from './commande/commande.component';
import { ClientComponent } from './client.component';




@NgModule({
  declarations: [
    ListCommandeComponent,
    AddCommandeComponent,
    UpdateClientComponent,
ClientComponent,
    DetailCommandeComponent,
      CommandeComponent,
   
  
  
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class ClientModule { }
