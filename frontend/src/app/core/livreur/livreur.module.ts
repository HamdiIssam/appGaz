import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivreurRoutingModule } from './livreur-routing.module';

import { ListFactureComponent } from './list-facture/list-facture.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListCmdLivreurComponent } from './list-cmd-livreur/list-cmd-livreur.component';
import { LoginLivreurComponent } from './login-livreur/login-livreur.component';


@NgModule({
  declarations: [
    ListFactureComponent,
    ListCmdLivreurComponent,
    LoginLivreurComponent
  ],
  imports: [
    CommonModule,
    LivreurRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class LivreurModule { }
