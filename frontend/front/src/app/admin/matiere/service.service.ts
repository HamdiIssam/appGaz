import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matiere } from './matiere';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  api_url='http://localhost3000/api/v1/mat'
  constructor(private _http : HttpClient) { }

  getmat():Observable <Matiere[]>{

    return this._http.get<Matiere[]>('http://localhost:3000/api/v1/mat')
   }

   postmat(matiere: Matiere):Observable <string>{
    console.log(matiere)
      return this._http.post<string>(`http://localhost:3000/api/v1/mat`,matiere)
     }

     deletemat(id:string):Observable <string>{
  
      return this._http.delete<string>('http://localhost:3000/api/v1/mat/'+id)
     }

   
}
