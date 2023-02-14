import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Eleve } from 'src/app/eleve/eleve-model';
import { EleveServiceService } from 'src/app/eleve/eleve-service.service';
import { ProfModel } from 'src/app/proffesseur/prof-model';
import { ProfServiceService } from 'src/app/proffesseur/prof-service.service';
import { ClasseService } from '../classe/classe.service';
import { ModelClasse } from '../classe/modelClasse';
import { Matiere } from '../matiere/matiere';
import { ServiceService } from '../matiere/service.service';
declare var window:any;

@Component({
  selector: 'app-adminestration',
  templateUrl: './adminestration.component.html',
  styleUrls: ['./adminestration.component.css']
})
export class AdminestrationComponent implements OnInit {

  matiere!:Matiere[]

  formAjoutModal:any;
  formAjoutModalElv:any;
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
  formModalElv:any
  idproff!: string;
  // Eleve
  formulaire2 = new FormGroup({
    _id:new FormControl(),
    fullname: new FormControl(),
    email: new FormControl(),
    classe: new FormControl(),
  });
  msg: string = '';
  eleve!: Eleve[] ;
  classe!:ModelClasse[]
  elv: Eleve = {
    _id: '',
    fullname: '',
    email: '',
    classe:{_id:'',name:''}
  };
idelv!:string
  id_Eleve ='';

  constructor(private _profServices:ProfServiceService,
    private _matiereservice:ServiceService,
    private modalService:NgbModal,
    private _EleveServiceService: EleveServiceService,
    private _classeService:ClasseService,
   ) { }

  ngOnInit(): void {
    this.formModal= new window.bootstrap.Modal(
      document.getElementById("monModal")
    );
    this.formAjoutModal= new window.bootstrap.Modal(
      document.getElementById("Ajoutmodal")
    );
    this.formModalElv= new window.bootstrap.Modal(
      document.getElementById("monModalElv")
    );
    this.formAjoutModalElv= new window.bootstrap.Modal(
      document.getElementById("AjoutmodalElv")
    );

    this.getallProf();
    this.getallmat();
    this.getAllEleve();
    this.getAllClasse()
  }
// eleve
  getAllClasse(){
    this._classeService.getClasse().subscribe((data)=>{
      this.classe=data
    }
    )
  }
  getAllEleve() {
    this._EleveServiceService.getAllEleve().subscribe((data) => {
      this.eleve = data;
      console.log(data.map(y=>y.classe));

    });
  }



  addEleve() {
    this.elv.fullname = this.formulaire2.value.fullname;
    this.elv.email = this.formulaire2.value.email;
    this.elv.classe = this.formulaire2.value.classe;

    console.log('se', this.elv);
    this._EleveServiceService.addEleve(this.elv).subscribe({
      next: (n) => {
        this.msg = n;
      },
      error: (e) => {
        console.log(e.error);
      },
      complete: () => {
        console.log('eleve completed');
      },
    }),
      this.getAllEleve();
  }
  conditionEleve() {
    if (this.id_Eleve === '') {
      this.addEleve();
    } else {
      this.updateEleve();
    }
  }
  updataElv(i:any){
    this.openModelElv()
    console.log(i);
    this.id_Eleve=i._id;
    console.log(this.id_Eleve);

    this.formulaire2.value.fullname =i.fullname;
    this.formulaire2.value.email=i.email;
    this.formulaire2.value.classe=i.classe;




    this.formulaire2.setValue({
      _id: i._id,
      fullname: i.fullname,
      email:i.email,
      classe: i.classe,




    });
  }
  updateEleve() {
    console.log(this.id_Eleve);

    this.elv._id = this.id_Eleve;
    this.elv.fullname = this.formulaire2.value.fullname;
    this.elv.email = this.formulaire2.value.email;
    this.elv.classe = this.formulaire2.value.classe;

    console.log(this.formulaire2.value);
    this._EleveServiceService
      .updateEleve(this.id_Eleve, this.elv)
      .subscribe({});
    this.getAllEleve();
  }

  deleteEleve(id: string) {
    this._EleveServiceService.deleteEleve(id).subscribe({
      next: (n) => {
        this.msg = n;
      },
      error: (e) => {
        console.log(e.error);
      },
      complete: () => {
        console.log('task completed');
      },
    });
    this.getAllEleve();
  }


  openModelElv(){
    this.formModalElv.show();

  }

  openAjoutModelElv(){
    this.formAjoutModalElv.show();

  }

  closeModleElv(){
    this.formModalElv.hide();
    this.formAjoutModalElv.hide();
  }

  // professeur


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
