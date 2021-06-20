import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '../models/interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  apiUrl = 'https://restcountries.eu/rest/v2';

  private _listaPaisesEncontrados: Pais[] = [];
  get listaPaisesEncontrados(): Pais[] {
    console.log('get listaPaisesEncontrados():', this._listaPaisesEncontrados);
    return this._listaPaisesEncontrados;
  }

  private _errorTerminoNoEncontrado = false;
  get errorTerminoNoEncontrado(): boolean {
    return this._errorTerminoNoEncontrado;
  }
  }

  constructor(private http: HttpClient) {}

  buscarPorPais(paisBuscado: string) {
    // ponemos a false el mensaje de error
    this._errorTerminoNoEncontrado = false;

    this.http.get<Pais[]>(`${this.apiUrl}/name/${paisBuscado}`).subscribe(
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

  buscarPorCapital(capitalBuscada: string) {
    // ponemos a false el mensaje de error
    this._errorTerminoNoEncontrado = false;

    this.http.get<Pais[]>(`${this.apiUrl}/capital/${capitalBuscada}`).subscribe(
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

  vaciarListaPaisesEncontrados() {
    this._listaPaisesEncontrados = [];
  }
}
