import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClasseService } from 'src/app/admin/classe/classe.service';
import { ModelClasse } from 'src/app/admin/classe/modelClasse';
import { EmploiModel } from 'src/app/admin/modelEmploi/emploi-model';
import { EmploiServiceService } from 'src/app/admin/modelEmploi/emploi-service.service';
import { Eleve } from 'src/app/eleve/eleve-model';
import { EleveServiceService } from 'src/app/eleve/eleve-service.service';
import { PenaliteModel } from '../penalite/penalite-model';
import { PenaliteServiceService } from '../penalite/penalite-service.service';
import { ProfModel } from '../prof-model';
import { ProfServiceService } from '../prof-service.service';
import { PinalitemodelService } from './pinalitemodel.service';
declare var window:any;
@Component({
  selector: 'app-pinalit1',
  templateUrl: './pinalit1.component.html',
  styleUrls: ['./pinalit1.component.css']
})
export class Pinalit1Component implements OnInit {

  formulaire = new FormGroup({
    _id: new FormControl(),
    penaliteType:new FormControl(),
    eleve:new FormControl(),
    professeur:new FormControl(),
    date:new FormControl(),
  
  });
  
  classes!:ModelClasse[];
  eleves!:Eleve[];
  profs!:ProfModel[];
  emplois!: EmploiModel[];
  penalites !:PenaliteModel[]
  
  
  prof:ProfModel={_id:'',fullname:'',email:'',specialite:'',matiere:{_id:'',name:''}}
  penalite:PenaliteModel={_id:'',penaliteType:'',date:'',eleve:{ _id: '', fullname: '', email: '',classe:{_id:'',name:''}},professeur:{_id:'',fullname:'',email:'',specialite:'',matiere:{_id:'',name:''}}}
  classe:ModelClasse = {  _id:'',  name:''}
  eleve: Eleve = { _id: '', fullname: '', email: '',classe:{_id:'',name:''}};
  
  
    id: any;
    elev:any
    prof_id='63b6e405e149b549180dcbb7'
    msg!:string
    k: any;
  
    text1!: string;
    text2!: string;
    text3!: string;
    text4!: string;
    formModal: any;
    formAjoutModal: any;
    id_Penalite: any;
    mat: any;
    // id_mat!: string ;
    // id_elev!: string;
  
    constructor(private _emploiservices: EmploiServiceService
      , private _classeService:ClasseService,
       private _penaliteService:PinalitemodelService,
       private _profservices:ProfServiceService,
       private _elevservices:EleveServiceService,
       private modalService:NgbModal,
  
       private route:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.formModal= new window.bootstrap.Modal(
        document.getElementById("monModal")
      );
      this.formAjoutModal= new window.bootstrap.Modal(
        document.getElementById("Ajoutmodal")
      );
  
  
      this.getAllClasse();
      this.getprofbyid();
  
  
  
  
    }
  
  
    getIdEleve(id:any){
      this.elev=id;
      console.log('id',this.elev);
      this._penaliteService.getPenaliteEleve(id).subscribe((data)=>{
        this.penalite=data
        console.log(this.penalite);
  
  
       })
    }
    // getpenalite(){
  
    //   this._penaliteService.getPenaliteEleve(this.eleve._id).subscribe((data)=>{
    //    this.penalite=data
    //    console.log(data);
  
  
    //   })
    // }
    getprofbyid(){
      this._profservices.getProfbyid(this.prof_id).subscribe((data)=>{
      this.prof=data
  
      })
    }
  
    getelevebyid(id:string){
  this._elevservices.getElevebyid(id).subscribe((data)=>{
    this.eleve=data
  })
    }
  
  getEleveClasse(){
  
  this.classe._id = this.formulaire.value._id;
  console.log("eeeeeeeeeeeee"+this.formulaire.value);
  
    this._emploiservices.getEmploieleves(this.classe._id).subscribe({
      next:(n) =>{
        const data:any=n
  
        this.emplois=data["emploi"]
        this.eleves=data["eleves"]
  console.log("id eleve",data);
  
  
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
  conditionPenalite(){
    if (this.id_Penalite==''){
      this.postPenalite();
  
     }else{
      this.updatePenalite();
  
     }
  
  
    }
  
    updata(i:any){
      this.openModel()
      console.log(i);
  
  this.formulaire.value._id=i._id
      this.formulaire.value.eleve =i.fullname;
      this.formulaire.value.penaliteType=i.penaliteType;
      this.formulaire.value.date=i.date;
  
  
  
  
    }
    updatePenalite(){
      this.penalite._id=this.id_Penalite;
      this.penalite.date=  this.formulaire.value.date;
      this.penalite.penaliteType=  this.formulaire.value.penaliteType;
  console.log(this.formulaire.value,'apdate');
  console.log(this.penalite._id);
  
  
  
      this._penaliteService.apdatePenalite(this.penalite,this.id_Penalite)
      .subscribe({next:(n)=>{
        this.msg=n;
  
  
  
      }});
  
    }
  
  
  
  postPenalite(){
  
  this.penalite.eleve=this.formulaire.value.eleve
    this.penalite.penaliteType=  this.formulaire.value.penaliteType;
    this.penalite.date=  this.formulaire.value.date;
  console.log(this.elev,'idEleve');
  
    this._penaliteService.postPenalite(this.penalite,this.prof_id,this.elev).subscribe({
  
      next:(n)=>{
        this.msg=n
        console.log(n,'resultat');
  
        ;
  
        console.log("l'ajoute de penalite d'indice a été effectuée avec success");
      },
      error:(e)=>{
        console.log(e.error);
  
      }
    })
  
  }
  openModel(){
        this.formModal.show();
  
      }
  
  
  
      openAjoutModel(){
        this.formAjoutModal.show();
  
      }
  
      closeModle(){
        this.formModal.hide();
        this.formAjoutModal.hide();
      }
      openDelete(targetModal:any,id:string){
        this.id_Penalite=id
     const modalRef=this.modalService.open(targetModal)
  
      }
  
  }