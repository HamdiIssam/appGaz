import { Component } from '@angular/core';
import { Produit } from 'src/app/core/models/produit';
import { ProduitService } from 'src/app/core/services/produit.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss']
})
export class ListProduitComponent {
  listProduit: Produit[] = []
  constructor(private produit: ProduitService) { }

  ngOnInit(): void {
    this.getAllProduit()
  }

  getAllProduit() {
    this.produit.getAllProduit().subscribe(data => {
      this.listProduit = data
    })
  }

deleteProduit(id:number){
  this.produit.deleteProduit(id).subscribe(data=>{
    this.getAllProduit()
  })
}




}
