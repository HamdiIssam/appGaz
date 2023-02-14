import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClasseService } from 'src/app/admin/classe/classe.service';
import { ModelClasse } from 'src/app/admin/classe/modelClasse';
import { EmploiModel } from 'src/app/admin/modelEmploi/emploi-model';
import { EmploiServiceService } from 'src/app/admin/modelEmploi/emploi-service.service';
import { Eleve } from 'src/app/eleve/eleve-model';
import { EleveServiceService } from 'src/app/eleve/eleve-service.service';
import { NoteModel } from '../note/note-model';
import { ProfModel } from '../prof-model';
import { ProfServiceService } from '../prof-service.service';
import { Presencemodel } from './presencemodel';
import { PresenservicesService } from './presenservices.service';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})
export class PresenceComponent implements OnInit {
  pres:Presencemodel ={
    _id: '',
    date: '',
    heure: '',
    eleve: { _id: '',  email: "",fullname: '', classe: { _id: '', name: '' } },
    professeur: { _id: '', fullname: '', email: "", specialite: "", matiere: { _id: "", name: "" } },
    etat: ''
  }
  notes !:NoteModel[];
  press !:Presencemodel[];
  classe:ModelClasse = {
    _id:'',
    name:''
  }
  mes!:string;
 
  classes!:ModelClasse[];
  emplois!:EmploiModel[];
eleves!:Eleve[];
profs!:ProfModel[];
prof:ProfModel={
   _id: '', fullname: '', email: "", specialite: "", matiere: { _id: "", name: "" }}

display = "none"
  msg!: string;
  id!:''
  formulaire = new FormGroup({
    _id: new FormControl(),
    date:new FormControl(),
    heure:new FormControl(),
    eleve:new FormControl(),
    professeur:new FormControl(),
    etat:new FormControl(),});
 
  constructor(private _eleveService:EleveServiceService,private _profService:ProfServiceService,private _presenceEleve:PresenservicesService,
    private _emploiService:EmploiServiceService,
    private _classeService:ClasseService,private _profservice:ProfServiceService) { }

  ngOnInit(): void {
    this.getEleveClasse()
    this.getallProf()
  }
  getPresenceByIdEleve(id:any){

    this._presenceEleve.getPresencebyid (id).subscribe((data)=>{
     this.press=data
     console.log(data);
    
    
    })
    }
    
     savePreesenceByIdEleve(){
     this.pres.date=  this.formulaire.value.date;
     this.pres.heure=  this.formulaire.value.heure;
     this.pres.eleve=  this.formulaire.value.eleve;
     this.pres.professeur=  this.formulaire.value.professeur;
     this.pres.etat=  this.formulaire.value.etat;
    console.log(this.formulaire);
    
      this._presenceEleve.savePresence(this.pres).subscribe({
    
        next:(n)=>{
          this.msg=n
          console.log(n,'resultat');
    
          ;
    
          console.log("l'ajoute de note d'indice a été effectuée avec success");
        },
        error:(e)=>{
          console.log(e.error);
    
        }
      })
    
      this.getEleveClasse();
      this.getallProf
      
    }
    
    
    openModal() {
      this.display = "block";
    }
    onCloseHandled() {
      this.display = "none";
    }
    getallProf(){
      this._profService.getallProf().subscribe((data) =>{
        this.profs=data
      });
      }
    getEleveClasse(){
    
      this.classe._id = this.formulaire.value._id;
     
      
        this._emploiService.getEmploieleves(this.classe._id).subscribe({
          next:(n) =>{
            const data:any=n
      
            this.emplois=data["emploi"]
            this.eleves=data["eleves"]
      
          },
          error: e => console.log(e)
        })
      
        this.getAllClasse();
      }
      getAllClasse(){
      this._classeService.getClasse().subscribe((data) =>{
        this.classes=data
      })
      }
      getprofbyid() {
        this._profService.getProfbyid(this.id).subscribe((data) => {
          this.prof = data;
        });
      }
}
