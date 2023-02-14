import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeur',
  templateUrl: './employeur.component.html',
  styleUrls: ['./employeur.component.scss']
})
export class EmployeurComponent {
  societeId=localStorage.getItem('societeId')
  logoud: boolean = false
constructor(private router:Router){}

ngOnInit():void{

}




  logoutSociete() {

    this.router.navigate(['/societe/login'])
    this.logoud = false
  
  
  }
}
