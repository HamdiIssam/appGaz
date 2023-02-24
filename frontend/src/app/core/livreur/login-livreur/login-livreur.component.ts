import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Livreur } from '../../models/livreur';
import { LivreurService } from '../../services/livreur.service';

@Component({
  selector: 'app-login-livreur',
  templateUrl: './login-livreur.component.html',
  styleUrls: ['./login-livreur.component.scss']
})
export class LoginLivreurComponent {
  password!: string
  LivreurLogin!: Livreur
  telephone!: number
  message:string=''
constructor(private router: Router, private loginLivreur: LivreurService){}


  loginLivreurController(telephone:number, password: string) {
    this.loginLivreur.loginLivreur(telephone, password).subscribe(data => {
      this.LivreurLogin = data
      // localStorage.setItem('role2', 'livreur'),
      //   localStorage.setItem('livreurId', data.id)
        this.router.navigate(['/livreur/list-cmdLivreur/' + data.id])

    })   
  }

}
