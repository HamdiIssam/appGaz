import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from '../../models/commande';
import { Lignecmd } from '../../models/lignecmd';
import { Produit } from '../../models/produit';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent {
  @Input() 
    ////////////fonction get

    listProduit: Produit[] = [];
    Produits: Produit = { id: 0, prixUnit: 0, type: '',unite:'' , photo:{fileBits:[],fileName:''}};
  
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

  
    /////////fonction calcul
  
    total: number = 0;
    x = 0;
  
    //////////// fonction ajout3
    id!: number;
    qts = 1;
  
    constructor(private produitSer: ProduitService, ) { }




  ngOnInit():void{
    this.getAllListProduit();
  }

  getAllListProduit() {
    this.produitSer.getAllProduit().subscribe((data) => {
      
      this.listProduit = data;
      // console.log('dedfefe',  this.listProduit );
      

    });
  }

  getProduitByIdController(id: number) {
    this.produitSer.getProduitById(id).subscribe((data) => {
      this.Produits = data;
      // console.log('get P ById data', this.Produits);
    });
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


}
