import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  termino: string = '';
  @Output() onNuevoTermino: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  buscar() {
    console.log('voy a hacer buscar() en paisInput con:, ', this.termino);
    this.onNuevoTermino.emit(this.termino);
  }
}
