import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasseService } from './classe.service';
import { ModelClasse } from './modelClasse';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {
  text1 !:string;
  br!: ModelClasse[]
  classe : ModelClasse={
    name: '',
    _id: ''

  }
  msg!:string
  constructor(private _servClasse: ClasseService , private _route:Router) { }

  ngOnInit(): void {
    this.getTousClasses();
  }
getTousClasses(){
  this._servClasse.getClasse().subscribe((data)=>{
    this.br = data;
  })
}

ajouterClasse(){
  this.classe.name=this.text1,
  this._servClasse.postClasse(this.classe).subscribe({
    next:(n)=>{
      this.msg=n
    },
    error:(e)=>{
      console.log(e.error);

    }
  })
  this.getTousClasses()
}

deleteClasse(id:string){
  this._servClasse.deleteClasse(id).subscribe((data) =>{
    console.log(data);
  })
  this.getTousClasses()
}
}
