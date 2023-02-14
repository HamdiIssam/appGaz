import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livreur } from 'src/app/core/models/livreur';
import { LivreurService } from 'src/app/core/services/livreur.service';

@Component({
  selector: 'app-update-livreur',
  templateUrl: './update-livreur.component.html',
  styleUrls: ['./update-livreur.component.scss']
})
export class UpdateLivreurComponent {
  updateLivreur!: Livreur[]
  livreurs!: Livreur
  id!: number
  constructor(private livreurSer: LivreurService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.livreurs = { id:0}
    
    this.id = (this.activateRoute.snapshot.params['id'])
    this.getLivreurByIdController(this.id)
  }
  getLivreurByIdController(id: number) {
    this.livreurSer.getlivreurById(id).subscribe(data => {
      this.livreurs = data
    })
  }

  updateLivreurController() {
    this.livreurSer.updatelivreurByID(this.id, this.livreurs).subscribe(data => {
      this.updateLivreur
      this.router.navigate(['/employeur/listLivreur'])
    })
  }

}
