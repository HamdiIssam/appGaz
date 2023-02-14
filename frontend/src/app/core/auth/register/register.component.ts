import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  addClient: Client = { id: 0 }
  id!: number
  SocieteId!:number
  constructor(private clientSer: ClientService, private router: Router) { }

  ngOnInit(): void { 
    this.SocieteId= Number(localStorage.getItem('societeId') ) 
  }


  createClientController() {
    this.addClient.societeId=this.SocieteId
    this.clientSer.createClient(this.addClient).subscribe(data => {
      this.router.navigate(['auth/login'])
    })

  }
}