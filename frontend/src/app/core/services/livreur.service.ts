import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livreur } from '../models/livreur';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',  })
  };
@Injectable({
  providedIn: 'root'
})
export class LivreurService {
  url=environment.serverUrl

  constructor(private httpClient:HttpClient) { }
//create livreur
createlivreur(livreur:Livreur):Observable<Livreur>{
  
  return this.httpClient.post<Livreur>(`${this.url}/livreur/add`,livreur,httpOptions)
 }

 // getAll livreur
 getlivreur():Observable<Livreur[]>{
   return this.httpClient.get<Livreur[]>(`${this.url}/livreur`)
  }
// get livreur ById

getlivreurById(id:number):Observable<Livreur>{
   return this.httpClient.get<Livreur>(`${this.url}/livreur/${id}`)
  }

// Update livreur
 
updatelivreurByID(id:number, livreur:Livreur):Observable<Livreur[]>{
  return this.httpClient.patch<Livreur[]>(`${this.url}/livreur/${id}`,livreur,httpOptions)
 }
// delete livreur 

deletelivreur(id:number):Observable<Livreur>{
  return this.httpClient.delete<Livreur>(`${this.url}/livreur/${id}`)
 }

       // login OneLivreur

       loginLivreur(telephone: number, password: string): Observable<any> {
        return this.httpClient.post<any>(`${this.url}/livreur`, { telephone, password });
      }

}
