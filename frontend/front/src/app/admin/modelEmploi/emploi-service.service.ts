import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmploiModel } from './emploi-model';

@Injectable({
  providedIn: 'root'
})
export class EmploiServiceService {

  constructor(private _http: HttpClient) { }

  getEmploieleves(id:string): Observable<EmploiModel[]> {
    return this._http.get<EmploiModel[]>('http://localhost:3000/api/v1/emp/classe/'+id)
  }
  getEmploi(): Observable<EmploiModel[]> {
    return this._http.get<EmploiModel[]>('http://localhost:3000/api/v1/emp/')
  }
  deleteEmploi(id: string): Observable<string> {
    return this._http.delete<string>("http://localhost:3000/api/v1/emp/" + id)
  }
  postEmploi(data: any): Observable<string> {
    console.log(data,'dataaaaa')
    return this._http.post<string>("http://localhost:3000/api/v1/emp", data)
  }
  apdateEmploi(data: any, id: string): Observable<string> {
    return this._http.patch<string>("http://localhost:3000/api/v1/emp/" + id, data)
  }


}
