import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Pais } from '../../models/interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styles: [],
})
export class DetallePaisComponent implements OnInit {
  paisDetalle: Pais | null;
  errorTerminoNoEncontrado = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {
    this.paisDetalle = null;
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.detallePaisPorCod(id)),
        tap(console.log)
      )
      .subscribe(
        (paisResponse) => {
          this.paisDetalle = paisResponse;
        },
        (err) => {
          if ((err.status = 404)) {
            this.errorTerminoNoEncontrado = true;
          }
        }
      );
  }
}
