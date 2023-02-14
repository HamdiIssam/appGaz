import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Matiere } from '../admin/matiere/matiere';
import { ServiceService } from '../admin/matiere/service.service';
import { ProfModel } from './prof-model';
import { ProfServiceService } from './prof-service.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


declare var window:any;
@Component({
  selector: 'app-proffesseur',
  templateUrl: './proffesseur.component.html',
  styleUrls: ['./proffesseur.component.css']
})
export class ProffesseurComponent implements OnInit {
  matiere!:Matiere[]

  formAjoutModal:any;
  profs!: ProfModel[]
  prof: ProfModel={
    _id:'',
   fullname :'',
   email:'' ,
   specialite:'' ,
   matiere:{_id:"", name:""}
  };
  formulaire=new FormGroup({
    _id:new FormControl(),
    fullname :new FormControl(),
    email:new FormControl(),
    specialite:new FormControl(),
    matiere:new FormControl(),
  });
    mes!:string;
    id_prof='';
  formModal: any;
  idproff!: string;
  constructor(private _profServices:ProfServiceService,
    private _matiereservice:ServiceService,
    private modalService:NgbModal
   ) { }

  ngOnInit(): void {
    this.formModal= new window.bootstrap.Modal(
      document.getElementById("monModal")
    );
    this.formAjoutModal= new window.bootstrap.Modal(
      document.getElementById("Ajoutmodal")
    );

    this.getallProf();
    this.getallmat();
  }




  getallmat(){
    this._matiereservice.getmat().subscribe((data)=>{
     console.log(data);
     this.matiere=data

    })
   }

  getallProf(){
    this._profServices.getallProf().subscribe((res)=> {
      this.profs=res
       console.log('prof',this.profs);
    });
    }


    saveProf(){
      this.prof.fullname=this.formulaire.value.fullname;
      this.prof.email=this.formulaire.value.email;
      this.prof.specialite=this.formulaire.value.specialite;
      this.prof.matiere=this.formulaire.value.matiere;
      this._profServices.saveProf(this.prof).subscribe({
      next: (n) => {
        this.mes=n;
      },
      error:(e)=>{
        console.log(e.error);

      },
      complete:()=>{
        console.log('cours complited');

      },
    });
    this.getallProf()

    }
    deleteProf(_id:string) {
      this._profServices.deleteProf(_id).subscribe({
        next: (n) => {
          this.mes = n;
        },
      });
       this.ngOnInit()
       this.getallProf()
    }

    conditionProf(){
      if (this.id_prof==''){
       this.saveProf();

      }else{
       this.updateProf();
      }

     this.getallProf()
     }

     updateProf(){

      this._profServices.updateProf(this.id_prof,this.formulaire.value)
      .subscribe({next:(n)=>{
        this.mes=n;
      }});
      this.getallProf()
      this.ngOnInit()
    }

    updata(i:any){
      this.openModel()
      console.log(i);
      this.id_prof=i._id;
      console.log(this.id_prof);

      this.formulaire.value.fullname =i.fullname;
      this.formulaire.value.email=i.email;
      this.formulaire.value.specialite=i.specialite;
      this.formulaire.value.matiere=i.matiere;



      this.formulaire.setValue({
        _id: i._id,
        fullname: i.fullname,
        email:i.email,
        specialite: i.specialite,
        matiere: i.matiere,



      });
    }
    openDelete(targetModal:any,id:string){
      this.idproff=id
   const modalRef=this.modalService.open(targetModal)

    }
    deleteprof(){
      this._profServices.deleteProf(this.idproff).subscribe({
        next: (n) => {
          this.mes = n;
        },
      });
       
       this.getallProf();
       this.ngOnInit();

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
}
