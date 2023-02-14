import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pinalitemodel } from './pinalitemodel';

@Injectable({
  providedIn: 'root'
})
export class PinalitemodelService {
  constructor(private _http : HttpClient) { }

  getPenalite():Observable <Pinalitemodel[]>{

    return this._http.get<Pinalitemodel[]>('http://localhost:3000/api/v1/pen')
   }
   getPenaliteEleve(id:string):Observable <Pinalitemodel>{

    return this._http.get<Pinalitemodel>('http://localhost:3000/api/v1/pen/pen/'+id)
   }
   postPenalite(penaliteModel: Pinalitemodel,idprof:string,idelev:string):Observable <string>{
      return this._http.post<string>(`http://localhost:3000/api/v1/pen/`+ idprof+'/'+idelev,penaliteModel)
     }
     apdatePenalite(data: any, id: any): Observable<string> {

      return this._http.patch<string>("http://localhost:3000/api/v1/pen/"+id, data)
    }

     deletePenalite(id:string):Observable <string>{

      return this._http.delete<string>('http://localhost:3000/api/v1/pen/'+id)
     }


}