import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Livreur } from 'src/app/core/models/livreur';
import { Societe } from 'src/app/core/models/societe';
import { LivreurService } from 'src/app/core/services/livreur.service';

@Component({
  selector: 'app-add-livreur',
  templateUrl: './add-livreur.component.html',
  styleUrls: ['./add-livreur.component.scss']
})
export class AddLivreurComponent {
addLivreur:Livreur={id: 0}

listLiv!:Livreur[]
SocieteId!:number
constructor(private livreurSer:LivreurService, private router:Router){

}

ngOnInit():void{
this.SocieteId= Number(localStorage.getItem('societeId') ) ;

}

createLivreurController(){ 
  this.addLivreur.societeId=this.SocieteId
  this.livreurSer.createlivreur(this.addLivreur).subscribe(data=>{
    // localStorage.setItem('role2','livreur')
    // localStorage.setItem('livreurId',data.id)
this.router.navigate(['employeur/listLivreur'])
  })
}





}
