import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Homework } from './homework';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

  Api_url = "http://localhost:3000/api/v1/homework/"
  constructor(private _http : HttpClient) { }
  getclassbyeleve(id:string):Observable<Homework[]>{
    return this._http.get<Homework[]>(this.Api_url+'class/'+id)
  }

  updateDoc(doc:any):Observable<string>{
    console.log("dataaaaa",doc);
    
    return this._http.post<string>('http://localhost:3000/api/v1/homework/',doc)
   }

}
