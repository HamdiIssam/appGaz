import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from '../../models/commande';
import { Lignecmd } from '../../models/lignecmd';
import { CommandeService } from '../../services/commande.service';
import { LignecmdService } from '../../services/lignecmd.service';

@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.scss']
})
export class ListCommandeComponent {
  commandes: Commande[] = []
  lignecmd:Lignecmd[]=[]
  commande!: Commande
  id!: number
  logoud: boolean = false
  clientId=localStorage.getItem('clientId')
  constructor(private ligneCmdSer:LignecmdService,private commandeSer: CommandeService, private router: Router, private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.commande={id:0 ,date_achat : new Date }
    this.id = (this.activateRouter.snapshot.params['id'])
    this.getAllCommandeByclientID(this.id)
    this.getAllLigneCmdByCommandeIdController(this.id)
  }


  getAllCommandeByclientID(clientId: number) {
    this.commandeSer.getCommandeByclientID(clientId).subscribe(data => {
      this.commandes=data

    })
  }
getAllLigneCmdByCommandeIdController(commandeId:number){
  this.ligneCmdSer.getLignecmdBycommandeIdService(commandeId).subscribe(data=>{
    this.lignecmd=data
  })

}


  logout() {

    localStorage.removeItem('clientId')
    localStorage.removeItem('role')

    this.router.navigate(['/auth/login'])
    this.logoud = false


  }



}
