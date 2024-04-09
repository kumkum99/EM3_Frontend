import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  constructor(private http: HttpClient) { }
  
  // Example method
  getData(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/');
  }
}
