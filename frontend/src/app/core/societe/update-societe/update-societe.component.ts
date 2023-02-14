import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Societe } from '../../models/societe';
import { SocieteService } from '../../services/societe.service';

@Component({
  selector: 'app-update-societe',
  templateUrl: './update-societe.component.html',
  styleUrls: ['./update-societe.component.scss']
})
export class UpdateSocieteComponent {
 updateSociete!:Societe[]
 societe!:Societe
 id!:number
//  societeId=localStorage.getItem('societeId')
 constructor( private societeSer: SocieteService ,private router:Router , private activateRouter: ActivatedRoute){}

ngOnInit():void{
  this.societe={id:0};
  this.id=(this.activateRouter.snapshot.params['id'])
this.getSocieteById(this.id)
}




getSocieteById(id:number){
  this.societeSer.getSocieteById(id).subscribe(data=>{
    this.societe=data
  })
};

updateSocieteController(){
  this.societeSer.updateSocieteByID(this.id, this.societe).subscribe(data=>{
    this.updateSociete
    this.router.navigate(['/employeur/listClient'])
  })
}





}



