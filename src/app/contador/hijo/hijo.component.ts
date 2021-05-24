import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  //recibe del padre
  @Input() contador!: number;
  // emite el cambio al padre, nombre del evento
  @Output() cambioContadorHijo = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  Multiplicar() {
    this.contador *= 2;
    this.cambioContadorHijo.emit(this.contador);
  }

  Dividir() {
    this.contador /= 2;
    this.cambioContadorHijo.emit(this.contador);
  }

  resetNieto(event: any) {
      this.contador = event;
      //lee los datos enviados desde el nieto 
      this.cambioContadorHijo.emit(this.contador);
  }

}
