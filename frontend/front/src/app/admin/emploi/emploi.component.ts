import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfModel } from 'src/app/proffesseur/prof-model';
import { ProfServiceService } from 'src/app/proffesseur/prof-service.service';
import { ClasseService } from '../classe/classe.service';
import { ModelClasse } from '../classe/modelClasse';
import { Matiere } from '../matiere/matiere';
import { ServiceService } from '../matiere/service.service';
import { EmploiModel } from '../modelEmploi/emploi-model';
import { EmploiServiceService } from '../modelEmploi/emploi-service.service';
declare var window:any
@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.component.html',
  styleUrls: ['./emploi.component.css']
})
export class EmploiComponent implements OnInit {
  emploiForm = new FormGroup ({

    professeur : new FormControl(),
    matiere : new FormControl(),
    classe : new FormControl(),
    jour : new FormControl(),
    seance : new FormControl(),
    salle : new FormControl(),
  })

  professeur !: ProfModel[]
  matiere !:Matiere[]
  classe !:ModelClasse[]
  emp !:EmploiModel[]
  emploi :EmploiModel={ _id:'',professeur:{_id:'',fullname:'',email:'',specialite:''},matiere:{_id:'',name:''},classe:{_id:'',name:''},jour:'',seance:'',salle:''}
  _idemp!:string
  id_emp!:string
  msg!:string
  formModifModal: any;
  formdeletModal:any
  constructor(private _servEmploi: EmploiServiceService ,
    private _servMatiere: ServiceService,
    private _servClasse:ClasseService,
    private _servProf:ProfServiceService,
    private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getTousEmplois();
    this.getallProf();
    this.getallClasse();
    this.getallMatiere();
    this.formdeletModal = new window.bootstrap.Modal(
      document.getElementById("supressionModal"),
     
    )
    this.formModifModal = new window.bootstrap.Modal(
      document.getElementById("modificationModal"),
     
    )
  }
  OpendeletModal(id:string){
    this._idemp=id
    this.formdeletModal.show()
  }
  OpenModifModal(id:string){
    this._idemp=id
    this.formModifModal.show()
  }
  getTousEmplois(){
    this._servEmploi.getEmploi().subscribe((data)=>{
      this.emp=data;
      console.log(this.emp,'emploi');
      
    })
  }
  getallProf(){
    this._servProf.getallProf().subscribe((res)=> {
      this.professeur=res
       console.log('prof',this.professeur);
    });
    }
    getallClasse(){
      this._servClasse.getClasse().subscribe((res)=> {
        this.classe=res
      });
      }
      getallMatiere(){
        this._servMatiere.getmat().subscribe((res)=> {
          this.matiere=res

        });}

        ajouterEmploi()
        {
         
          this.emploi.professeur=this.emploiForm.value.professeur
          this.emploi.classe=this.emploiForm.value.classe
          this.emploi.matiere=this.emploiForm.value.matiere
          this.emploi.jour=this.emploiForm.value.jour
          this.emploi.salle=this.emploiForm.value.salle
          this.emploi.seance=this.emploiForm.value.seance
console.log(this.emploiForm.value,'hhhhhh');

          this._servEmploi.postEmploi(this.emploiForm.value).subscribe({
            next:(n)=>{
              this.msg=n
              
            },error:(e)=>{
              console.log(e.msg);
              
            }
          })
    this.getTousEmplois();

        }
        deletemp(){
   
    
          this._servEmploi.deleteEmploi(this._idemp).subscribe({
            next:(n)=>{
              this.msg=n
        
            },
          error:(e)=>{
            console.log(e.error);
            
          },complete:()=>{
            console.log('delete effectuer');
            
          }
          })
          this.getTousEmplois();
        }

        updateemp(){
          console.log(this._idemp,'iddd',this.emploiForm.value,'idddddd');
          
          this._servEmploi.apdateEmploi(this.emploiForm.value,this._idemp).subscribe({
            next:(n)=>{
              this.msg=n
              this.getTousEmplois();
        console.log('this._idemp',this._idemp);
        
            },
          error:(e)=>{
            console.log(e.error);
            
          },complete:()=>{
            console.log('update  effectuer');
            
          }
          })
         
       
        }  
        update(d:EmploiModel){
          this.OpenModifModal(this.id_emp);
          console.log(d);
          this.emploiForm.value.professeur =d.professeur.fullname
          this.emploiForm.value.classe=d.classe.name
          this.emploiForm.value.matiere=d.matiere?.name
          this.emploiForm.value.jour=d.jour
          this.emploiForm.value.salle=d.salle
          this.emploiForm.value.seance=d.seance
         
         
          
         
          this._idemp= d._id
          console.log(this._idemp,'idddddd');
          
        
         } 

         ajoutemp(){
          if(this._idemp== ""){
            this.ajouterEmploi()
            
        
          }
          else{
            this.updateemp()
          }
         
        }

}
