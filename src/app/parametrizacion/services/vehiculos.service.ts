import { Injectable, EventEmitter } from '@angular/core';
import { Vehiculos } from '../models/vehiculos';
import { Observable } from 'rxjs';
import { RespuestaServices } from 'src/app/core/models/RespuestaServices';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  crearVehiculo = new EventEmitter<any>();

  constructor(private  http: HttpClient) { }

  getAll(): Observable<Vehiculos[]> {
    return this.http.get<Vehiculos[]>(environment.API_URL + '/Vehiculos/GetAll');
    }
    getId(id: string): Observable<Vehiculos> {
    return this.http.get<Vehiculos>(environment.API_URL + '/Vehiculos/Get/' + id);
    }
    post(body: Vehiculos): Observable<RespuestaServices> {
    return this.http.post<RespuestaServices>(environment.API_URL + '/Vehiculos/Post', body);
    }
    put(body: Vehiculos): Observable<RespuestaServices> {
    return this.http.put<RespuestaServices>(environment.API_URL + '/Vehiculos/Put', body);
    }
    delete(id: number): Observable<RespuestaServices> {
    return this.http.delete<RespuestaServices>(environment.API_URL + '/Vehiculos/Delete/' + id);
    }






}
