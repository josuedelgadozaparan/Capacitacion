import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../componentes/models/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  validarLogin(body: User): Observable<boolean> {
    return this.http.post<boolean>(environment.API_URL + '/User/ValidarLogin', body);
  }   
  getAllUser(): Observable<any> {
    return this.http.get<any>(environment.API_URL + '/User/getall');
  }
}
