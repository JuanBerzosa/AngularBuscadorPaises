import { Component, Input } from '@angular/core';
import { Pais } from '../../models/interfaces/pais.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent {
  @Input() listaPaisesEncontrados!: Pais[];
}
