import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { take } from 'rxjs/operators';

import { Pais } from '../models/interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  apiUrl = 'https://restcountries.eu/rest/v2';

  private _listaPaisesEncontrados: Pais[] = [];
  get listaPaisesEncontrados(): Pais[] {
    return this._listaPaisesEncontrados;
  }

  private _errorTerminoNoEncontrado = false;
  get errorTerminoNoEncontrado(): boolean {
    return this._errorTerminoNoEncontrado;
  }
  private _paisDetalle: Pais | null = null;
  get paisDetalle(): Pais | null {
    return this._paisDetalle;
  }

  private _listaPaisesSugeridos: Pais[] = [];
  get listaPaisesSugeridos(): Pais[] {
    return this._listaPaisesSugeridos;
  }

  httpParams: HttpParams = new HttpParams().set(
    'fields',
    'name;capital;alpha2Code;population;flag'
  );

  constructor(private http: HttpClient) {}

  buscarPorPais(paisBuscado: string) {
    // ponemos a false el mensaje de error
    this._errorTerminoNoEncontrado = false;

    this.http
      .get<Pais[]>(`${this.apiUrl}/name/${paisBuscado}`, {
        params: this.httpParams,
      })
      .subscribe(
        (paisesResponse) => {
          console.log('paisesResponse', paisesResponse);
          this._listaPaisesEncontrados = paisesResponse;
        },
        (err) => {
          if ((err.status = 404)) {
            this._errorTerminoNoEncontrado = true;
          }
        }
      );
  }

  buscarPorCapital(capitalBuscada: string) {
    // ponemos a false el mensaje de error
    this._errorTerminoNoEncontrado = false;

    this.http
      .get<Pais[]>(`${this.apiUrl}/capital/${capitalBuscada}`, {
        params: this.httpParams,
      })
      .subscribe(
        (paisesResponse) => {
          this._listaPaisesEncontrados = paisesResponse;
        },
        (err) => {
          console.error('El error es, por consoleError', err);
          if ((err.status = 404)) {
            this._errorTerminoNoEncontrado = true;
          }
        }
      );
  }

  buscarPorRegion(regionBuscada: string) {
    // ponemos a false el mensaje de error
    this._errorTerminoNoEncontrado = false;

    this.http
      .get<Pais[]>(`${this.apiUrl}/region/${regionBuscada}`, {
        params: this.httpParams,
      })
      .subscribe(
        (paisesResponse) => {
          this._listaPaisesEncontrados = paisesResponse;
        },
        (err) => {
          console.error('El error es, por consoleError', err);
          if ((err.status = 404)) {
            this._errorTerminoNoEncontrado = true;
          }
        }
      );
  }

  detallePaisPorCod(paisBuscadoCod: string) {
    // ponemos a false el mensaje de error
    this._errorTerminoNoEncontrado = false;

    return this.http.get<Pais>(`${this.apiUrl}/alpha/${paisBuscadoCod}`);
    // .subscribe(
    //   (paisResponse) => {
    //     this._paisDetalle = paisResponse;
    //   },
    //   (err) => {
    //     console.error('El error es, por consoleError', err);
    //     if ((err.status = 404)) {
    //       this._errorTerminoNoEncontrado = true;
    //     }
    //   }
    // );
  }

  vaciarListaPaisesEncontrados() {
    this._listaPaisesEncontrados = [];
  }

  sugerencias(terminoBuscado: string) {

    this.http
      .get<Pais[]>(`${this.apiUrl}/name/${terminoBuscado}`, {
        params: this.httpParams,
      })
      // NOTA: Esto no vale, ya que http solo devuelve siempre 1 único resultado (el cual suele ser un array)
      // .pipe(
      //   take(5)
      // )
      .subscribe(
        (paisesResponse) => {
          // ponemos a false el mensaje de error
          this._errorTerminoNoEncontrado = false;

          // Mostrar solo 5 sugerencias
          this._listaPaisesSugeridos = paisesResponse.slice(0, 5);

          console.log('this._listaPaisesSugeridos', this._listaPaisesSugeridos);

        },
        (err) => {
          this._listaPaisesSugeridos = [];
        }
      );
  }
}
