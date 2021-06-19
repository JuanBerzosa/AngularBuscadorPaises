import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  apiUrl = 'https://restcountries.eu/rest/v2';

  private _listaPaisesEncontrados: any[] = [];
  get listaPaisesEncontrados(): any[] {
    console.log('get listaPaisesEncontrados():', this._listaPaisesEncontrados);
    return this._listaPaisesEncontrados;
  }

  private _errorPaisNoEncontrado = false;
  get errorPaisNoEncontrado(): boolean {
    console.log('get errorPaisNoEncontrado():', this._errorPaisNoEncontrado);
    return this._errorPaisNoEncontrado;
  }

  constructor(private http: HttpClient) {}

  buscarPorPais(paisBuscado: string) {
    // ponemos a false el mensaje de error
    this._errorPaisNoEncontrado = false;

    this.http.get<any>(`${this.apiUrl}/name/${paisBuscado}`).subscribe(
      (paisesResponse) => {
        this._listaPaisesEncontrados = paisesResponse;
      },
      (err) => {
        console.error('El error es, por consoleError', err);
        if ((err.status = 404)) {
          this._errorPaisNoEncontrado = true;
        }
      }
    );
  }

  vaciarListaPaisesEncontrados() {
    this._listaPaisesEncontrados = [];
  }
}