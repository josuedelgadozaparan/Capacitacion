import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../componentes/models/login';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http: HttpClient) { }
  validarLogin(body: User): Observable<boolean> {
    return this.http.post<boolean>(environment.API_URL + '/User/ValidarLogin', body);
  }   
  getAllUser(): Observable<any> {
    return this.http.get<any>(environment.API_URL + '/User/getall');
  }
}
