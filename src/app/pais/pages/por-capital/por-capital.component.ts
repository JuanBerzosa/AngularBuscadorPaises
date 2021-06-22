import { Component, OnInit } from '@angular/core';

import { Pais } from '../../models/interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  terminoABuscar = '';

  get listaPaisesEncontrados(): Pais[] {
    return this.paisService.listaPaisesEncontrados;
  }

  constructor(public paisService: PaisService) {
    this.paisService.vaciarListaPaisesEncontrados();
  }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.terminoABuscar = termino;

    // vaciamos la anterior lista si la hubiera
    this.paisService.vaciarListaPaisesEncontrados();

    this.paisService.buscarPorCapital(this.terminoABuscar);
  }

}
