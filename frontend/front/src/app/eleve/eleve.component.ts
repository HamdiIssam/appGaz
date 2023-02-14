import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClasseService } from '../admin/classe/classe.service';
import { ModelClasse } from '../admin/classe/modelClasse';
import { Eleve } from './eleve-model';
import { EleveServiceService } from './eleve-service.service';

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.css'],
})
export class EleveComponent implements OnInit {
  formulaire = new FormGroup({
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

  id_Eleve ='';

  constructor(
    private _EleveServiceService: EleveServiceService,
    private _classeService:ClasseService,
    private fb: FormBuilder
  ) {
    this.formulaire = this.fb.group({
      fullname: [''],
      email: [''],
      classe: [''],
    });
  }

  ngOnInit(): void {
    this.getAllEleve();
    this.getAllClasse()
  }
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

  addEleve() {
    this.elv.fullname = this.formulaire.value.fullname;
    this.elv.email = this.formulaire.value.email;
    this.elv.classe = this.formulaire.value.classe;

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

  update(i: any) {
    console.log('i', i);
    this.formulaire.value.fullname = i.fullname;
    this.formulaire.value.email = i.email;
    this.formulaire.value.classe = i.classe;

    this.id_Eleve = i._id;
  }

  conditionEleve() {
    if (this.id_Eleve === '') {
      this.addEleve();
    } else {
      this.updateEleve();
    }
  }

  updateEleve() {
    console.log(this.id_Eleve);

    this.elv._id = this.id_Eleve;
    this.elv.fullname = this.formulaire.value.fullname;
    this.elv.email = this.formulaire.value.email;
    this.elv.classe = this.formulaire.value.classe;

    console.log(this.formulaire.value);
    this._EleveServiceService
      .updateEleve(this.id_Eleve, this.elv)
      .subscribe({});
    this.getAllEleve();
  }
}
