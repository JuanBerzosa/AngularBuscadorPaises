import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent implements OnInit {
  regionABuscar: string | null = null;

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  get listaPaisesEncontrados() {
    return this.paisService.listaPaisesEncontrados;
  }

  constructor(public paisService: PaisService) {
    this.paisService.vaciarListaPaisesEncontrados();
  }

  ngOnInit(): void {}

  buscar(termino: string) {
    if (termino === this.regionABuscar) {
      return;
    }

    this.regionABuscar = termino;
    this.paisService.vaciarListaPaisesEncontrados();
    this.paisService.buscarPorRegion(termino);
  }
}
