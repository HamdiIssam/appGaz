import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Presencemodel } from './presencemodel';

@Injectable({
  providedIn: 'root'
})
export class PresenservicesService {

  Api_url="http://localhost:3000/api/v1/presence"
  constructor(private _httpPresence:HttpClient) { }
  getPresencebyid(id:string):Observable<Presencemodel[]>{
    return this._httpPresence.get<Presencemodel[]>("http://localhost:3000/api/v1/presence/eleve/"+id)
   }

  getallPresence():Observable<Presencemodel[]>{
    return this._httpPresence.get<Presencemodel[]>(this.Api_url)
  }
  deletePresence(id :string):Observable<string>{
    return this._httpPresence.delete<string>(this.Api_url+'/'+id)
  }
  savePresence(data:Presencemodel):Observable<string>{
  
    return this._httpPresence.post<string>(this.Api_url+'/presence',data)
  }

  updatePresence(id:string,data:any):Observable<string>{
    console.log('data',data);
    return this._httpPresence.patch<string>(this.Api_url+'/'+id,data)
    }
}
