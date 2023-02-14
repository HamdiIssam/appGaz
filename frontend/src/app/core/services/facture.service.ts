import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Facture } from '../models/facture';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',  })
  };

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  url=environment.serverUrl

  constructor(private httpClient:HttpClient) { }
//create Facture
createFacture(facture:Facture):Observable<Facture>{
  return this.httpClient.post<Facture>(`${this.url}/facture`,facture,httpOptions)
 }

 // getAll Facture
 getFacture():Observable<Facture[]>{
   return this.httpClient.get<Facture[]>(`${this.url}/facture`)
  }
// get Facture ById

getFactureById(id:number):Observable<Facture[]>{
   return this.httpClient.get<Facture[]>(`${this.url}/facture/${id}`)
  }








}


