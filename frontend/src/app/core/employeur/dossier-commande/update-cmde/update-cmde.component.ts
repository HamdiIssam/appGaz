import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from 'src/app/core/models/commande';
import { Livreur } from 'src/app/core/models/livreur';
import { CommandeService } from 'src/app/core/services/commande.service';
import { LivreurService } from 'src/app/core/services/livreur.service';

@Component({
  selector: 'app-update-cmde',
  templateUrl: './update-cmde.component.html',
  styleUrls: ['./update-cmde.component.scss']
})
export class UpdateCmdeComponent {

  listCommande!: Commande[]
  listLivreur:Livreur[]=[]
  commande!: Commande
  livreur!:Livreur

  id!: number
  constructor(private livreurSer:LivreurService,private commandeSer: CommandeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.commande = { id: 0  }
    this.livreur ={ id:0, nom:''}
    this.id = (this.activatedRoute.snapshot.params['id'])
    this.getcommandeById(this.id)
    this.getAllLivreurController()

  }

  getcommandeById(id: number) {
    this.commandeSer.getCommanderById(id).subscribe(data => {
      this.commande = data
    })
  }

getAllLivreurController(){
  this.livreurSer.getlivreur().subscribe(data=>{
    this.listLivreur=data
  })
}

  validationCommandeAndAddLivreurController() {
    this.commandeSer.updateCommandeByID(this.id, this.commande).subscribe(data => {
      this.listCommande
      this.router.navigate(['/employeur/listCommande'])
    })
  }

}


