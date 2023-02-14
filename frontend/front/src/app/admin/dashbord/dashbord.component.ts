import { Component, OnInit } from '@angular/core';
import { Eleve } from 'src/app/eleve/eleve-model';
import { EleveServiceService } from 'src/app/eleve/eleve-service.service';
import { ProfModel } from 'src/app/proffesseur/prof-model';
import { ProfServiceService } from 'src/app/proffesseur/prof-service.service';
import { ClasseService } from '../classe/classe.service';
import { Matiere } from '../matiere/matiere';
import { ServiceService } from '../matiere/service.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  profs!:ProfModel[];
  eleves!:Eleve[];
  matieres!:Matiere[];
  teach!: ProfModel[];
  cour!: Matiere[];

  constructor(private _profServices:ProfServiceService,
    private _matServices:ServiceService,
  private  _eleveservice:EleveServiceService) { }

  ngOnInit(): void {
    this.getallprof();
this.getalleleve();
this.getallmatiere();
  }

  getallprof(){
    this._profServices.getallProf().subscribe((res)=> {
      this.teach=res
       console.log('cours',this.teach);
    });
    }

    getallmatiere(){
      this._matServices.getmat().subscribe({
        next:(n)=>{
         this.cour=n
          console.log('cours',this.cour);

        },
      });
    }

    getalleleve(){
      this._eleveservice.getAllEleve().subscribe({
        next:(n)=>{
         this.eleves=n
          console.log('cours',this.eleves);

        },
      });
    }


}
