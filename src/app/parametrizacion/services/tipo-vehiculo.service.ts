import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoVehiculos } from './../models/tipoVehiculo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoVehiculoService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<TipoVehiculos[]> {
    return this.http.get<TipoVehiculos[]>(environment.API_URL + '/TipoVehiculos/GetAll');
    }
}
