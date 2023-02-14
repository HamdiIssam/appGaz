import { Component } from '@angular/core';
import { Commande } from 'src/app/core/models/commande';
import { CommandeService } from 'src/app/core/services/commande.service';

@Component({
  selector: 'app-list-cmde',
  templateUrl: './list-cmde.component.html',
  styleUrls: ['./list-cmde.component.scss']
})
export class ListCmdeComponent {
  listCommande:Commande[]=[];
  id!:number

  constructor( private commandeSer:CommandeService){}

  ngOnInit():void{
this.getAllCommande()
  }

getAllCommande(){
  this.commandeSer.getCommande().subscribe(data=>{
    this.listCommande=data
  })
}



}
