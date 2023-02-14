import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eleve } from './eleve-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EleveServiceService {
 
  Api_url = "http://localhost:3000/api/v1/ele/"
  constructor(private _http : HttpClient) { }



  addEleve(data:Eleve):Observable<string>{
    console.log('data',data);
    
    return this._http.post<string>(this.Api_url,data)

  }
  getAllEleve():Observable<Eleve[]>{
    return this._http.get<Eleve[]>(this.Api_url)

  }
 

  
  getElevebyid(id:string):Observable<Eleve>{
    return this._http.get<Eleve>(this.Api_url+id)
  }
  deleteEleve(id : string):Observable<string>{
    return this._http.delete<string>(this.Api_url+id)
  }

updateEleve(id:string,data:any):Observable<string>{

  return this._http.patch<string>(this.Api_url+id,data)


}

}
