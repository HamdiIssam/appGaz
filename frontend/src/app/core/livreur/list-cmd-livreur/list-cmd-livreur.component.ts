import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../models/client';
import { Commande } from '../../models/commande';
import { Lignecmd } from '../../models/lignecmd';
import { Livreur } from '../../models/livreur';
import { ClientService } from '../../services/client.service';
import { CommandeService } from '../../services/commande.service';
import { LignecmdService } from '../../services/lignecmd.service';
import { LivreurService } from '../../services/livreur.service';

@Component({
  selector: 'app-list-cmd-livreur',
  templateUrl: './list-cmd-livreur.component.html',
  styleUrls: ['./list-cmd-livreur.component.scss']
})
export class ListCmdLivreurComponent {
  client!:Client
  livreur!: Livreur
  commandes: Commande[] = []
  lignecmd:Lignecmd[]=[]
  commande!: Commande
  id!: number
  logoud: boolean = false
  constructor(private ligneCmdSer:LignecmdService,private clientSer:ClientService,private livreurSer: LivreurService, private commandeSer: CommandeService, private router: Router, private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.client={id:0}
    this.commande = { id: 0 , date_achat: new Date }
    this.id = (this.activateRouter.snapshot.params['id'])
    this.getAllCommandeByLivreurId(this.id)
    this.getLivreurByIdController(this.id)
    this.getClientById(this.id)
    this.getAllLigneCmdByCommandeId(this.id)
  }
  getLivreurByIdController(id: number) {
    this.livreurSer.getlivreurById(id).subscribe(data => {
      this.livreur = data
    })
  }

  getAllCommandeByLivreurId(livreurId: number) {
    this.commandeSer.getCommandeByLivreurID(livreurId).subscribe(data => {
      this.commandes = data
    })

  }

  getAllLigneCmdByCommandeId(commandeId:number){
    this.ligneCmdSer.getLignecmdBycommandeIdService(commandeId).subscribe(data=>{
      this.lignecmd=data
    })
  
  }

getClientById(id:number){
  this.clientSer.getClientById(id).subscribe(data=>{
    this.client=data})
    }

  logoutLivreur() {

    localStorage.removeItem('LivreurId')
    localStorage.removeItem('role2')

    this.router.navigate(['/livreur/login'])
    this.logoud = false


  }



}


