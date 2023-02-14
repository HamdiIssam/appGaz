import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProfModel } from './prof-model';

@Injectable({
  providedIn: 'root'
})
export class ProfServiceService {
  Api_url="http://localhost:3000/api/v1/pro"
  constructor(private _httpProf:HttpClient) { }

  getProfbyid(id:string):Observable<ProfModel>{
    return this._httpProf.get<ProfModel>("http://localhost:3000/api/v1/pro/"+id)
  }

  getallProf():Observable<ProfModel[]>{
    return this._httpProf.get<ProfModel[]>(this.Api_url)
  }
  deleteProf(id :string):Observable<string>{
    return this._httpProf.delete<string>(this.Api_url+'/'+id)
  }
  saveProf(data:ProfModel):Observable<string>{
    console.log("eeeee",{data});

    return this._httpProf.post<string>(this.Api_url,data)
  }

  updateProf(id:string,data:any):Observable<string>{
    console.log('data',data);
    return this._httpProf.patch<string>(this.Api_url+'/'+id,data)
    }


}
