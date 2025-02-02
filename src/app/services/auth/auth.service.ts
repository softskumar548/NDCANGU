import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) { }

  login(payloads: any){
    return this.http.post(`${environment.apiBaseUrl}Auth/Login`, payloads);
  }

  register(payloads: any){
    return this.http.post(`${environment.apiBaseUrl}Auth/Register`, payloads);
  }
}
