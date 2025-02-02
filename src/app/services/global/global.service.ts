import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor( ) { }

  getLocalStorage(key: string){
    const localStorageVal = localStorage.getItem(key);
    if (localStorageVal !== null) {
      return JSON.parse(localStorageVal);
    } 
    return;
  }

  setLocalStorage(key: string, value: JSON){
    return localStorage.setItem(key, JSON.stringify(value));
  }

  
}
