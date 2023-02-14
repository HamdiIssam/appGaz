import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url = environment.serverUrl

  token: any
  constructor(private httpClient: HttpClient) { }
  //create Cleint
  createClient(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(`${this.url}/client/add`, client, httpOptions)
  }

  // getAll Client
  getAllClient(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(`${this.url}/client`)
  }
  // get Client ById

  getClientById(id: number): Observable<Client> {
    return this.httpClient.get<Client>(`${this.url}/client/${id}`)
  }
  // Update Client

  updateClientByID(id: number, client: Client): Observable<Client[]> {
    return this.httpClient.patch<Client[]>(`${this.url}/client/${id}`, client, httpOptions)
  }
  // delete Client 

  deleteClient(id: number): Observable<Client> {
    return this.httpClient.delete<Client>(`${this.url}/client/${id}`)
  }

  // login OneClient

  login(telephone: number, password: string): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/client`, { telephone, password });
  }

  isLogin(): boolean {
    this.token = localStorage.getItem('role')
    if (this.token === 'client'|| this.token === 'societe') {
      return true

    }
    else {
      return false
    }
  }







}
