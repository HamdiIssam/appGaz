import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Societe } from '../../models/societe';
import { SocieteService } from '../../services/societe.service';

@Component({
  selector: 'app-add-societe',
  templateUrl: './add-societe.component.html',
  styleUrls: ['./add-societe.component.scss']
})
export class AddSocieteComponent {


  addSociete:Societe={id:0}
  message:string=''
  
constructor(private router: Router, private createSociete: SocieteService){}




  createSocieteController(){

   const societe = this.createSociete.getAllSociete()
    
    if (societe){
      
      this.createSociete.createSociete(this.addSociete).subscribe(data=>{
    this.router.navigate(['/societe/login'])
      })
      
    }
    else{
     this.message='Societe Exist'
     console.log('message',this.message);
     
    }


}


  
}
