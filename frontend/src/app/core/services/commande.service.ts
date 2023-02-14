import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commande } from '../models/commande';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',  })
  };
@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  url=environment.serverUrl
  constructor(private httpClient:HttpClient) { }
//create Commande
createCommande(commande:Commande):Observable<Commande>{
   return this.httpClient.post<Commande>(`${this.url}/commande`,commande,httpOptions)
  }

// get commande By clientID

getCommandeByclientID(clientId:number):Observable<Commande[]>{
  
  return this.httpClient.get<Commande[]>(`${this.url}/commande/client/${clientId}`)
}
// get commande By livreurID

getCommandeByLivreurID(livreurtId:number):Observable<Commande[]>{
  return  this.httpClient.get<Commande[]>(`${this.url}/commande/livreur/${livreurtId}`)
}
  // getAll Commande
  getCommande():Observable<Commande[]>{
    return this.httpClient.get<Commande[]>(`${this.url}/commande`)
   }
// get Commande ById

getCommanderById(id:number):Observable<Commande>{
    return this.httpClient.get<Commande>(`${this.url}/commande/${id}`)
   }

    // Update Commande

  updateCommandeByID(id: number, commande: Commande): Observable<Commande[]> {
    return this.httpClient.patch<Commande[]>(`${this.url}/commande/${id}`, commande, httpOptions)
  }

  }