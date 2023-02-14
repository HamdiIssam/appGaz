import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Matiere } from './matiere';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {
  formModal:any;
matiere!:Matiere[]
  mat:Matiere={_id:"", name:""}

  matForm = new FormGroup({
    name : new FormControl (),
  
   })
   msg! :string
   id_mat! :""
 
  constructor(private _userservice:ServiceService) { }

  ngOnInit(): void {
    this.getallmat()
  }
 
  getallmat(){
    this._userservice.getmat().subscribe((data)=>{
     console.log(data);
     this.matiere=data
     
    })
   }

   addmat(){
   
    this.mat.name = this.matForm.value.name ,
    
    this._userservice.postmat(this.mat).subscribe({
     
      next:(n)=>{
        this.msg=n
  
      },
    error:(e)=>{
      console.log(e.error);
      
    },complete:()=>{
      console.log('Ajout effectuer');
      
    }
    })
  this.getallmat()
  }

  deletmat(id:string){
   
    
    this._userservice.deletemat(id).subscribe({
      next:(n)=>{
        this.msg=n
  
      },
    error:(e)=>{
      console.log(e.error);
      
    },complete:()=>{
      console.log('delete effectuer');
      
    }
    })
    this.getallmat()
  }

 
  
  
  
}
