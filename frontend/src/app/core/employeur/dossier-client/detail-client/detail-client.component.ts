import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lignecmd } from 'src/app/core/models/lignecmd';
import { LignecmdService } from 'src/app/core/services/lignecmd.service';
import { Client } from '../../../models/client';
import { Commande } from '../../../models/commande';
import { ClientService } from '../../../services/client.service';
import { CommandeService } from '../../../services/commande.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.scss']
})
export class DetailClientComponent {
  client!:Client
commande!:Commande
updateCommande!:Commande[]
commandes: Commande[] = []
lignecmd:Lignecmd[]=[]
id!:number
  constructor(private ligneCmdSer:LignecmdService,private clientSer:ClientService, private activatedRoute:ActivatedRoute, private router:Router ,private commandeSer:CommandeService) { }
  ngOnInit(): void {
    this.client={id:0}
    this.commande={id:0 , date_achat : new Date}
    this.id=(this.activatedRoute.snapshot.params['id'])
  this.getClientById(this.id)
  this.getAllCommandeByClientId(this.id)
  this.getAllLigneCmdByCommandeId(this.id)
  }

  getClientById(id:number){
    this.clientSer.getClientById(id).subscribe(data=>{
      this.client=data})
      }

  getAllCommandeByClientId(clientId:number){
    this.commandeSer.getCommandeByclientID(clientId).subscribe(data=>{
      this.commandes=data
    })
      
      }
      

      getAllLigneCmdByCommandeId(commandeId:number){
        this.ligneCmdSer.getLignecmdBycommandeIdService(commandeId).subscribe(data=>{
          this.lignecmd=data
          
        })
      
      }
      


    
  }