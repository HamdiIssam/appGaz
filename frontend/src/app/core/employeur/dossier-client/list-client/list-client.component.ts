import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../../models/client';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent {
  societeId=localStorage.getItem('societeId')
listClient:Client[]=[]

  
  constructor(private client:ClientService ,private router:Router) { }
  
ngOnInit():void{
  this.getAllClient()
}

getAllClient(){
  this.client.getAllClient().subscribe(data=>{
    this.listClient=data 
  })
}




}
