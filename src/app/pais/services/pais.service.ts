import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  url = 'https://restcountries.eu/rest/v2/name';
  constructor(private http: HttpClient) {}

  buscarPorPais(paisBuscado: string) {
    this.http.get(`${this.url}/${paisBuscado}`).subscribe((paisesResponse) => {
      console.log(paisesResponse);
    });
  }
}
