import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { ClasseService } from 'src/app/admin/classe/classe.service';
import { ModelClasse } from 'src/app/admin/classe/modelClasse';
import { Matiere } from 'src/app/admin/matiere/matiere';
import { ServiceService } from 'src/app/admin/matiere/service.service';
import { EmploiModel } from 'src/app/admin/modelEmploi/emploi-model';
import { EmploiServiceService } from 'src/app/admin/modelEmploi/emploi-service.service';
import { Eleve } from 'src/app/eleve/eleve-model';
import { EleveServiceService } from 'src/app/eleve/eleve-service.service';
import { EleveModule } from 'src/app/eleve/eleve.module';
import { ProfModel } from '../prof-model';
import { ProfServiceService } from '../prof-service.service';

import { NoteModel } from './note-model';
import { NoteServiceService } from './note-service.service';
declare var window: any;
const URL='http://localhost:3000/api/homework';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  elev: any;
  data: any = {};
  fileToUpload:Array<File>=[];
  formData = new FormData();
  formulaire = new FormGroup({
    _id: new FormControl(),
    fullname: new FormControl(),
  });
  formulaire2 = new FormGroup({
    _id: new FormControl(),
    noteTd: new FormControl(),
    matiere: new FormControl(),
    eleve: new FormControl(),
    noteTp: new FormControl(),
    noteSy: new FormControl(),
    mention: new FormControl(),
  });
  index!: number;
  notes!: NoteModel[];
  emplois!: EmploiModel[];
  eleves!: Eleve[];
  profs!: ProfModel[];
  matieres!: Matiere[];
  matiere: Matiere = { _id: '', name: '' };
  prof: ProfModel = {
    _id: '',
    fullname: '',
    email: '',
    specialite: '',
    matiere: { _id: '', name: '' },
  };
  classes!: ModelClasse[];

  noteElve: NoteModel = {
    _id: '',
    note_td: '',
    note_tp: '',
    note_sy: '',
    mention: '',
    eleve: { _id: '', fullname: '', email: '', classe: { _id: '', name: '' } },
    matiere: { _id: '', name: '' },
  };
  classe: ModelClasse = {
    _id: '',
    name: '',
  };
  eleve: Eleve = {
    _id: '',
    fullname: '',
    email: '',
    classe: { _id: '', name: '' },
  };

  id: any;

  msg!: string;
  k: any;
  ele!: Eleve[];
  text1!: string;
  text2!: string;
  text3!: string;

  text4!: string;
  formModal: any;
  formAjoutModal: any;
  id_noteElve: any;
  mat: any;

  mat_id!: string;
  notebymatier!: NoteModel;
  image!: File;
  choosen!: boolean;
  submitted!: boolean;
  class_id!: string;

  // id_mat!: string ;
  // id_elev!: string;

  constructor(
    private _emploiservices: EmploiServiceService,
    private _classeService: ClasseService,
    private _noteService: NoteServiceService,
    private _profservices: ProfServiceService,
    private _elevservices: EleveServiceService,
    private route: ActivatedRoute,

  ) {}



  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  ngOnInit(): void {

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('monModal')
    );
    this.formAjoutModal = new window.bootstrap.Modal(
      document.getElementById('Ajoutmodal')
    );
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.classe._id = this.formulaire.value._id;
    // this.getEleveClasse();
    this.getAllClasse();
    this.getprofbyid();
    this.getallnote();
  




  }

  getnotebymatier(id: string) {
    this.mat  = id;
    this._noteService.getnoteleve(id).subscribe((data) => {
      this.notebymatier = data;

      console.log(this.mat);
    });

  }
  getnoteeleve(id: string) {
    this.elev = id;
    this._noteService.getnoteleve(id).subscribe((data) => {
      this.noteElve = data;
    });
  }

  getallnote(){
    this._noteService.getnot().subscribe((data)=>{
      this.notes=data
    })
  }
  getprofbyid() {
    this._profservices.getProfbyid(this.id).subscribe((data) => {
      this.prof = data;
    });
  }
// getmatierbyIdProf(){
// this._matierservices.

// }
  getelevebyid(id: string) {
    this._elevservices.getElevebyid(id).subscribe((data) => {
      this.eleve = data;
    });
  }

  getEleveClasse() {
    this.classe._id = this.formulaire.value._id;


    this._emploiservices.getEmploieleves(this.classe._id).subscribe({
      next: (n) => {
        const data: any = n;

        this.emplois = data['emploi'];
        this.eleves = data['eleves'];


      },
      error: (e) => console.log(e),
    });

    this.getAllClasse();
  }
  getAllClasse() {
    this._classeService.getClasse().subscribe((data) => {
      this.classes = data;
    });
  }
  conditionNote() {
    console.log(this.noteElve._id, 'iiiiiiiiiiiiiii');

    if (this.noteElve._id==='') {
      this.postNote();
      this.ngOnInit();
    } else {
      this.updateNote();

      // this.ngOnInit();
      this.getallnote();

    }
  }

  updateNote() {
    console.log(this.noteElve._id);

    this.noteElve.note_td = this.formulaire2.value.noteTd;
    this.noteElve.note_tp = this.formulaire2.value.noteTp;
    this.noteElve.note_sy = this.formulaire2.value.noteSy;
    this.noteElve.mention = this.formulaire2.value.mention;

    console.log(this.noteElve, 'noteeleve');

    this._noteService.apdatenot(this.noteElve, this.noteElve._id).subscribe({
      next: (n) => {
        this.msg = n;
      },
    });
    this.noteElve._id='';
    this.getEleveClasse();
  }


  postNote() {
    this.noteElve.note_td = this.formulaire2.value.noteTd;
    this.noteElve.note_tp = this.formulaire2.value.noteTp;
    this.noteElve.note_sy = this.formulaire2.value.noteSy;
    this.noteElve.mention = this.formulaire2.value.mention;




    console.log(this.elev, 'idEleve');
    console.log(this.mat, 'idmat');

    this._noteService.postnot(this.noteElve, this.mat,this.elev ).subscribe({
      next: (n) => {
        this.msg = n;
        console.log(n, 'resultat');

        console.log("l'ajoute de note d'indice a été effectuée avec success");
      },
      error: (e) => {
        console.log(e.error);
      },
    });


    this.ngOnInit();
  }

  openModel() {
    this.formModal.show();
  }
  openAjoutModel() {

    console.log();

    this.formAjoutModal.show();

  }

  closeModle() {
    this.formModal.hide();
    this.formAjoutModal.hide();
  }
}





