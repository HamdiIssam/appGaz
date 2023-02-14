import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PenaliteModel } from './penalite-model';

@Injectable({
  providedIn: 'root'
})
export class PenaliteServiceService {

  constructor(private _http : HttpClient) { }

  getPenalite():Observable <PenaliteModel[]>{

    return this._http.get<PenaliteModel[]>('http://localhost:3000/api/v1/pen')
   }
   getPenaliteEleve(id:string):Observable <PenaliteModel>{

    return this._http.get<PenaliteModel>('http://localhost:3000/api/v1/pen/pen/'+id)
   }

   postPenalite(penaliteModel: PenaliteModel,idprof:string,idelev:string):Observable <string>{
      return this._http.post<string>(`http://localhost:3000/api/v1/pen/`+ idprof+'/'+idelev,penaliteModel)
     }
     apdatePenalite(data: any, id: any): Observable<string> {

      return this._http.patch<string>("http://localhost:3000/api/v1/pen/"+id, data)
    }

     deletePenalite(id:string):Observable <string>{

      return this._http.delete<string>('http://localhost:3000/api/v1/pen/'+id)
     }


}
