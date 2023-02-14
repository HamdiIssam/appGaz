import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from 'src/app/core/models/produit';
import { ProduitService } from 'src/app/core/services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss']
})
export class AddProduitComponent {
addporduit:Produit={id:0,type:'',prixUnit:0, unite:'' , photo:{fileBits:[],fileName:''}}
  SocieteId!:number
  myFiles:Array<File>=[]
  @ViewChild('f') data:any= NgForm;
  formdata = new FormData();
constructor(private produit:ProduitService, private router:Router){}


ngOnInit():void{
    this.SocieteId= Number(localStorage.getItem('societeId') ) 
}

createProduitConrtoller(){
 
  this.formdata.append("type",this.addporduit.type);
    this.formdata.append("prixUnit",String(this.addporduit.prixUnit));
    this.formdata.append("unite",this.addporduit.unite);
    this.formdata.append("societeId",localStorage.getItem('societeId')+"");
    this.formdata.append("photo",this.myFiles[0]) ;
 console.log(this.formdata);
 
   this.produit.createProduit(this.formdata).subscribe(data=>{
    this.router.navigate(['employeur/listProduit'])
   })
}


onFileChange(event:any){
  this.myFiles=<Array<File>>event.target.files;
console.log(this.myFiles[0]);

 

}

}