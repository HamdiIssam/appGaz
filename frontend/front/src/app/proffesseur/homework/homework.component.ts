import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { ClasseService } from 'src/app/admin/classe/classe.service';
import { ModelClasse } from 'src/app/admin/classe/modelClasse';
import { EmploiServiceService } from 'src/app/admin/modelEmploi/emploi-service.service';

import { NoteServiceService } from '../note/note-service.service';
import { ProfModel } from '../prof-model';
import { ProfServiceService } from '../prof-service.service';
import { Homework } from './homework';
import { HomeworkService } from './homework.service';
const URL='http://localhost:3000/api/homework';
@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {
  formulaire = new FormGroup({
    _id: new FormControl(),
    fullname: new FormControl(),
  });

  prof: ProfModel = {
    _id: '',
    fullname: '',
    email: '',
    specialite: '',
    matiere: { _id: '', name: '' },
  };
  classe: ModelClasse = {
    _id: '',
    name: '',
  };
  image!: File;
  fileToUpload:Array<File>=[];
  choosen!: boolean;

  msg!: string;
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  homeworks!:Homework[];
  id!: string;
  classes!: ModelClasse[];
 
  emplois: any;
  eleves: any;
  formData = new FormData();
  
  constructor( private _homeworkervices:HomeworkService,
    private route: ActivatedRoute,
    private _classeService:ClasseService
    ,private _profservices:ProfServiceService,
    private _emploiservices:EmploiServiceService) { }

  ngOnInit(): void {
    this.getClassByEleve();
    this.getprofbyid()
    this.getAllClasse()
    
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.classe._id = this.formulaire.value._id;
    
    
  }

  getEleveClasse() {
    this.classe._id = this.formulaire.value._id;
    console.log(this.classe._id,'eeeeeeeeeeeeeeeeeeeee');
    this._emploiservices.getEmploieleves(this.classe._id).subscribe({
      next: (n) => {
        const data: any = n;

        this.emplois = data['emploi'];
        this.eleves = data['eleves'];


      },
      error: (e) => console.log(e),
    });
   
    this.getAllClasse();
    this.ngOnInit()
  }
  getprofbyid() {
    this._profservices.getProfbyid(this.id).subscribe((data) => {
      this.prof = data;
    });
    
  }

  getAllClasse() {
    this._classeService.getClasse().subscribe((data) => {
      this.classes = data;
    });
  }

  getClassByEleve()
{ console.log(this.classe._id,'eeeeeeeeeeeeeeeeeeeee');
  this._homeworkervices.getclassbyeleve(this.classe._id).subscribe((res)=>{
    this.homeworks=res;
    console.log("rrrrrrrrrrrrr"+res[9].homework);
    
   
  })
}

  handleFileInput(files:any){
    this.fileToUpload=<Array<File>>files.target.files;
    console.log(this.fileToUpload);
  }
  
  fileCoosen(event:any){
    if(event.target.value){
      this.image=<File>event.target.files[0];
      this.choosen=true;
    }
  }
  
  submitDoc(){
  
    this.formData.append("homework",this.fileToUpload[0]);
    console.log(this.formData,'dddddddd');
    
    this.formData.append("classe",this.classe._id)
  
    console.log(this.formData);
  
    this._homeworkervices.updateDoc(this.formData).subscribe((res)=>{
      this.msg=res
      console.log(this.msg);
  
  
    })
    this.getClassByEleve()
    this.ngOnInit()
  }

  openModale(chemin:string){

  }
}
