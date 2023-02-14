import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NoteModel } from './note-model';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor(private _http : HttpClient) { }

  getnot():Observable <NoteModel[]>{

    return this._http.get<NoteModel[]>('http://localhost:3000/api/v1/not')
   }
   
   getnoteleve(id:string):Observable <NoteModel>{

    return this._http.get<NoteModel>('http://localhost:3000/api/v1/not/note/'+id)
   }

   postnot(noteModel: NoteModel,idmat:string,idelev:string):Observable <string>{
      return this._http.post<string>(`http://localhost:3000/api/v1/not/`+ idmat+'/'+idelev,noteModel)
     }
    
     apdatenot(data: any, id: string): Observable<string> {
      console.log(data,'data',id, 'id');


      return this._http.patch<string>("http://localhost:3000/api/v1/not/"+id, data)
    }

     deletenot(id:string):Observable <string>{

      return this._http.delete<string>('http://localhost:3000/api/v1/not/'+id)
     }


}
