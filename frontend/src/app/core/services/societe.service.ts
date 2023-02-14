import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Societe } from '../models/societe';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',  })
  };

@Injectable({
  providedIn: 'root'
})
export class SocieteService {
  url=environment.serverUrl
  token: any;
  constructor(private httpClient:HttpClient) { }
  //create Societe
  createSociete(societe:Societe):Observable<Societe>{
    return this.httpClient.post<Societe>(`${this.url}/societe/add`,societe,httpOptions)
   }
 
   // getAll Societe
   getAllSociete():Observable<Societe[]>{
     return this.httpClient.get<Societe[]>(`${this.url}/societe`)
    }
 // get Societe ById
 
    getSocieteById(id:number):Observable<Societe>{
     return this.httpClient.get<Societe>(`${this.url}/societe/${id}`)
    }
 // Update Societe
 
    updateSocieteByID(id:number, societe:Societe):Observable<Societe[]>{
     return this.httpClient.patch<Societe[]>(`${this.url}/societe/${id}`,societe,httpOptions)
    }

      // login OneSociete

  loginSociete(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/societe`, { email, password });
  }

  // isLogin(): boolean {
  //   this.token = localStorage.getItem('role')
  //   if (this.token === 'societe') {
  //     return true

  //   }
  //   else {
  //     return false
  //   }
  // }
  
}
