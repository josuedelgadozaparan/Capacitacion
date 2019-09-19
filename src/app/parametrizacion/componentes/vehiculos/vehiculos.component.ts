import { TipoVehiculoService } from './../../services/tipo-vehiculo.service';
import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Vehiculos } from '../../models/vehiculos';
import { VehiculosService } from '../../services/vehiculos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VehiculosModalComponent } from '../../modales/vehiculos-modal/vehiculos-modal.component';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {


  title: string;
  vehiculosArray: Vehiculos[];
  columns: any[];
  constructor(private serviceVehiculo: VehiculosService ,private serviceTipoVehiculo: TipoVehiculoService,
    private modalService: NgbModal ) { }

  ngOnInit() {
    this.title="Vehiculo";


    this.serviceVehiculo.crearVehiculo.subscribe( response2 => {
      console.log(response2)
      if (response2 === true) {
        this.llenarTabla();
      }
    });

    this.llenarTabla();


    this.columns = [
      { field: 'id', header: 'Id' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'placa', header: 'Placa' },
      { field: 'modelo', header: 'Modelo' }
      ];




  }

  open() {
    const modalRef = this.modalService.open(VehiculosModalComponent);
    modalRef.componentInstance.title = 'crear';
    this.serviceTipoVehiculo.getAll().subscribe( response => {
      console.log(response)
      modalRef.componentInstance.listTipoVehiculo = response;
    });


  }
  llenarTabla() {

    this.serviceVehiculo.getAll().subscribe( response => {
      this.vehiculosArray = response;
      console.log(this.vehiculosArray)
      });
  }
}
