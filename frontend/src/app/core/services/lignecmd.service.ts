import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lignecmd } from '../models/lignecmd';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',  })
  };
@Injectable({
  providedIn: 'root'
})
export class LignecmdService {
  url=environment.serverUrl

  constructor(private httpClient:HttpClient) { }
//create Lignecmd
createLigneCmdService(lignecmd:Lignecmd):Observable<Lignecmd>{
  return this.httpClient.post<Lignecmd>(`${this.url}/lignecmd`,lignecmd,httpOptions)
 }

 // getAll Lignecmd
 getAllLignecmdService():Observable<Lignecmd[]>{
   return this.httpClient.get<Lignecmd[]>(`${this.url}/lignecmd`)
  }
// get Lignecmd ById

getLignecmdById(id:number):Observable<Lignecmd[]>{
   return this.httpClient.get<Lignecmd[]>(`${this.url}/lignecmd/${id}`)
  }

// get Lignecmd By commandeId

getLignecmdBycommandeIdService(commandeId:number):Observable<Lignecmd[]>{
  return  this.httpClient.get<Lignecmd[]>(`${this.url}/lignecmd/commande/${commandeId}`)
}

}
