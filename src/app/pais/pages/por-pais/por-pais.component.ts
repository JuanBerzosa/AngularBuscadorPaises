import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent implements OnInit {
  paisABuscar = '';

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar() {
    console.log(this.paisABuscar);
    this.paisService.buscarPorPais(this.paisABuscar);
  }
}
