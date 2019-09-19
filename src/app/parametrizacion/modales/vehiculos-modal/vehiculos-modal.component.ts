import { VehiculosService } from './../../services/vehiculos.service';
import { Vehiculos } from './../../models/vehiculos';
import { TipoVehiculos } from './../../models/tipoVehiculo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vehiculos-modal',
  templateUrl: './vehiculos-modal.component.html',
  styleUrls: ['./vehiculos-modal.component.css']
})
export class VehiculosModalComponent implements OnInit {

  @Input() public title: string;
  @Input() public listTipoVehiculo: TipoVehiculos[];
  vehiculosForm: FormGroup;
  submitted = false;
  vehiculos: Vehiculos;
  constructor(public activeModal: NgbActiveModal,
               private formBuilder: FormBuilder,
               private serviceVehiculo: VehiculosService) { }

  ngOnInit() {
    this.vehiculosForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      placa: ['', Validators.required],
      modelo: ['', Validators.required],
      idTipoVehiculo: ['', Validators.required]
  });
  }

   // convenience getter for easy access to form fields
   get f() { return this.vehiculosForm.controls; }

   onSubmit() {
       this.submitted = true;

       // stop here if form is invalid
       if (this.vehiculosForm.invalid) {
           return;
       } else {
        this.vehiculos = new  Vehiculos();
        this.vehiculos = this.vehiculosForm.value;
        this.serviceVehiculo.post(this.vehiculos).subscribe( response => {
          this.serviceVehiculo.crearVehiculo.emit(true);
          this.activeModal.close();
          console.log(response)
        });


       }
   }

}
