import { Component } from '@angular/core';
import { Livreur } from 'src/app/core/models/livreur';
import { LivreurService } from 'src/app/core/services/livreur.service';

@Component({
  selector: 'app-list-livreur',
  templateUrl: './list-livreur.component.html',
  styleUrls: ['./list-livreur.component.scss']
})
export class ListLivreurComponent {
  listLivreur:Livreur[]=[]
  constructor(private livreurSer:LivreurService){}


ngOnInit():void{
  this.getAllLivreurController()
}


getAllLivreurController(){
  this.livreurSer.getlivreur().subscribe(data=>{
    this.listLivreur=data
  })
}

deleteLivreur(id:number){
  this.livreurSer.deletelivreur(id).subscribe(data=>{
    localStorage.removeItem('livreurId')
    localStorage.removeItem('role2')
    this.getAllLivreurController()
  })
}



}
 