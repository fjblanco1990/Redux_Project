import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  // escuchar los datos del padre y del hijo
  @Input() contador!: number;
  //emite el envento para enviar los datos a el hijo y el pádre desde el nieto
  @Output() cambioContadorHijo = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    this.contador = 0;
    this.cambioContadorHijo.emit(this.contador);
  }
}
