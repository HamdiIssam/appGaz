import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from '../../models/commande';
import { Lignecmd } from '../../models/lignecmd';
import { CommandeService } from '../../services/commande.service';
import { LignecmdService } from '../../services/lignecmd.service';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.component.html',
  styleUrls: ['./detail-commande.component.scss']
})
export class DetailCommandeComponent {
  commande!: Commande
  lignecmd:Lignecmd[]=[]
  lignecmds!:Lignecmd
  id!: number
  constructor(private commandeSer:CommandeService, private ligneCmdSer:LignecmdService , private activatedRoute:ActivatedRoute){}

ngOnInit():void{
  this.commande = { id: 0 , date_achat: new Date }
  this.id = (this.activatedRoute.snapshot.params['id'])
  this.getcommandeById(this.id)
  this.getAllLigneCmdByCommandeIdController(this.id)
}

getcommandeById(id: number) {
  this.commandeSer.getCommanderById(id).subscribe(data => {
    this.commande = data
  })
}

getAllLigneCmdByCommandeIdController(commandeId:number){
  this.ligneCmdSer.getLignecmdBycommandeIdService(commandeId).subscribe(data=>{
    this.lignecmd=data
  })

}


}
