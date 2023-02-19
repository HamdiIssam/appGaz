import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  clientId=localStorage.getItem('clientId')
  logoud: boolean = false
constructor(private router:Router){}

  logout() {

    localStorage.removeItem('clientId')
    localStorage.removeItem('role')

    this.router.navigate(['/auth/login'])
    this.logoud = false


  }
}
