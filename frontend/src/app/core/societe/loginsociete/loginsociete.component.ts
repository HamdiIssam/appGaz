import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Societe } from '../../models/societe';
import { SocieteService } from '../../services/societe.service';

@Component({
  selector: 'app-loginsociete',
  templateUrl: './loginsociete.component.html',
  styleUrls: ['./loginsociete.component.scss']
})
export class LoginsocieteComponent {
  password!: string
  societeLogin!: Societe
  email!: string
  addSociete:Societe={id:0}
  message:string=''
constructor(private router: Router, private loginSociete: SocieteService){}

  loginSocieteController(email: string, password: string) {
    this.loginSociete.loginSociete(email, password).subscribe(data => {
      this.societeLogin = data
      localStorage.setItem('role1', 'societe'),
        localStorage.setItem('societeId', data.id)
        this.router.navigate(['/employeur'])

    })   
  }

}
