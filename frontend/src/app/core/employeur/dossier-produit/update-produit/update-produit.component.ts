import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/core/models/produit';
import { ProduitService } from 'src/app/core/services/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.scss']
})
export class UpdateProduitComponent {
  updatesProduit!: Produit[]
  Produits!: Produit
  id!: number
  constructor(private produitSer: ProduitService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.Produits = { id: 0, type: '', prixUnit: 0,unite:'' ,photo:''}
    this.id = (this.activateRoute.snapshot.params['id'])
    this.getProduitByIdController(this.id)
  }


  getProduitByIdController(id: number) {

    this.produitSer.getProduitById(id).subscribe(data => {
      this.Produits = data


    })
  }
  updateProduitController() {
    this.produitSer.updateProduitByID(this.id, this.Produits).subscribe(data => {
      this.updatesProduit

      this.router.navigate(['/employeur/listProduit'])
    })
  }





}
