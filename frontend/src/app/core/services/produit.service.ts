import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produit } from '../models/produit';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',  })
  };

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  url=environment.serverUrl
  constructor(private httpClient:HttpClient) { }
  //create produit
  createProduit(produit:any):Observable<Produit>{
    console.log(produit,'produit');
    
    return this.httpClient.post<Produit>(`${this.url}/produit`,produit)
   }
 
   // getAll produit
   getAllProduit():Observable<Produit[]>{
     return this.httpClient.get<Produit[]>(`${this.url}/produit`)
    }
 // get produit ById
 
    getProduitById(id:number):Observable<Produit>{
     return this.httpClient.get<Produit>(`${this.url}/produit/${id}`)
    }
 // Update produit
 
    updateProduitByID(id:number, produit:Produit):Observable<Produit[]>{
     return this.httpClient.patch<Produit[]>(`${this.url}/produit/${id}`,produit,httpOptions)
    }
 // delete produit 
 
 deleteProduit(id:number):Observable<Produit>{
     return this.httpClient.delete<Produit>(`${this.url}/produit/${id}`)
    }

}
