import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from '../../models/commande';
import { Lignecmd } from '../../models/lignecmd';
import { Produit } from '../../models/produit';
import { CommandeService } from '../../services/commande.service';
import { LignecmdService } from '../../services/lignecmd.service';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.scss'],
})
export class AddCommandeComponent {
  ////////////fonction get

  addCommande: Commande = { id: 0 };
  addLigneCmd: Lignecmd = {
    prix: 0, nom_produit: '', quantite: 0, commandeId: 0, produitId: 0,
  };
  SocieteId!: number;
  clientId!: number;
  listProduit: Produit[] = [];
  Produits: Produit = { id: 0, prixUnit: 0, type: '' ,unite:'' , photo:''};

  ///////// fonction ajout()

  list: Lignecmd[] = [];
  lignecmds: Lignecmd = {
    id: 0,
    prix: 0,
    nom_produit: '',
    quantite: 0,
    commandeId: 0,
    produitId: 0,
  };
  produitId!: number;

  /////////fonction calcul

  total: number = 0;
  x = 0;

  //////////// fonction ajout3
  id!: number;
  qts = 1;

  constructor(
    private ligneCmdSer: LignecmdService,
    private commandeSer: CommandeService,
    private produitSer: ProduitService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.SocieteId = Number(localStorage.getItem('societeId'));
    this.clientId = Number(localStorage.getItem('clientId'));
    this.getAllListProduit();
  }

  getAllListProduit() {
    this.produitSer.getAllProduit().subscribe((data) => {
      this.listProduit = data;

    });
  }

  getProduitByIdController(id: number) {
    this.produitSer.getProduitById(id).subscribe((data) => {
      this.Produits = data;
      // console.log('get P ById data', this.Produits);
    });
  }

  ajout() {
    this.getProduitByIdController(this.lignecmds.produitId);
    console.log('produitId 1 ', this.lignecmds.produitId);
    // console.log('list1',this.list);
  }

  ajout2() {
    this.ajout();
    let LC = this.list.find(nn => nn.produitId == this.Produits.id)
    if (LC === undefined) {
      this.list.push({
        produitId: this.Produits.id,
        nom_produit: this.Produits.type,
        prix: this.Produits.prixUnit,
        quantite: this.lignecmds.quantite,
      });

    }
    else {
      LC.quantite += this.lignecmds.quantite
    }
    this.calculPrixTotal(this.lignecmds.quantite, this.Produits.prixUnit);

    // console.log('list push :',this.list);
  }

  calculPrixTotal(q: number, p: number) {
    this.x += q * p;
    // console.log('X=',this.x);
  }
  removeLigneCommande(
    produitId: number,
    nom_produit: string,
    prix: number,
    quantite: number
  ) {
    this.list = this.list.filter(
      (y) =>
        y.produitId !== produitId &&
        y.nom_produit !== nom_produit &&
        y.prix !== prix &&
        y.quantite !== quantite
    );
    this.x -= quantite * prix;
  }
  ////////// ajout un produit avec click

  ajout3(idProduit: Produit) {

    this.getProduitByIdController(idProduit.id)

    // console.log('getProduitByIdController',idProduit);

    let L = this.list.find(nn => nn.produitId == idProduit.id)

    if (L === undefined) {
      this.list.push({
        produitId: idProduit.id,
        nom_produit: idProduit.type,
        prix: idProduit.prixUnit,
        quantite: this.qts
      });

    }
    else {
      L.quantite++
    }
    this.calculPrixTotal(this.qts, idProduit.prixUnit);
  }




  createController() {
    this.addCommande.societeId = this.SocieteId;
    this.addCommande.clientId = this.clientId;
    this.addCommande.total = this.x;
    const bb = this.commandeSer
      .createCommande(this.addCommande)
      .subscribe((data) => {
        if (bb) {
          this.list.forEach((element) => {
            this.addLigneCmd.commandeId = data.id;
            this.addLigneCmd.produitId = element.produitId;
            this.addLigneCmd.nom_produit = element.nom_produit;
            this.addLigneCmd.prix = element.prix;
            this.addLigneCmd.quantite = element.quantite;

            this.ligneCmdSer.createLigneCmdService(this.addLigneCmd).subscribe((data) => { });
          });
        }
        this.router.navigate(['/client/list-cmdClient/' + data.clientId]);
      });
  }
}
