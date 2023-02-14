import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../models/client';
import { Societe } from '../../models/societe';
import { ClientService } from '../../services/client.service';
import { SocieteService } from '../../services/societe.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  clientLogin!: Client
  telephone!: number
  password!: string
  message: string = ""
  constructor(private loginSer: ClientService, private router: Router) { }

  ngOnInint(): void { }


  loginController(telephone: number, password: string) {
    this.loginSer.login(telephone, password).subscribe(data => {
      this.clientLogin = data
      if (this.clientLogin  !== undefined) {
        this.message = "Verify your Telephone Ou Password"
    
      }
        localStorage.setItem('role', 'client'),
        localStorage.setItem('clientId', data.id),
        this.router.navigate(['/client/list-cmdClient/' + data.id])
      
    })
  }

  


}


