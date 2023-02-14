import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelClasse } from './modelClasse';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {


  constructor(private  _http :HttpClient) { }

  getClasse(): Observable<ModelClasse[]>{
return this._http.get<ModelClasse[]>("http://localhost:3000/api/v1/cla")
  }
  deleteClasse(id:string): Observable<string>{
    return this._http.delete<string>("http://localhost:3000/api/v1/cla/"+id)
      }
      postClasse(data:ModelClasse): Observable<string>{
        return this._http.post<string>("http://localhost:3000/api/v1/cla",data)
          }
          apdateClasse(data:any ,id:string): Observable<string>{
            return this._http.patch<string>("http://localhost:3000/api/v1/cla/"+id,data)
              }


}
