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
  vehiculosForm: FormGroup;
  submitted = false;
  constructor(public activeModal: NgbActiveModal,
               private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.vehiculosForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      placa: ['', Validators.required],
      modelo: ['', Validators.required],
      idTipoVehiculo: ['', Validators.required]
  });
  }

}
