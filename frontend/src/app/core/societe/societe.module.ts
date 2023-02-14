import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocieteRoutingModule } from './societe-routing.module';
import { LoginsocieteComponent } from './loginsociete/loginsociete.component';
import { AddSocieteComponent } from './add-societe/add-societe.component';
import { UpdateSocieteComponent } from './update-societe/update-societe.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginsocieteComponent,
    AddSocieteComponent,
    UpdateSocieteComponent
  ],
  imports: [
    CommonModule,
    SocieteRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class SocieteModule { }
