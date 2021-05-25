import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
// import { multiplicar, dividir } from '../contador.actions';
import * as Actions from '../contador.actions';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  //recibe del padre
  // @Input() contador!: number;
   contador!: number;
  // emite el cambio al padre, nombre del evento
  // @Output() cambioContadorHijo = new EventEmitter<number>();
  constructor(private Store: Store<AppState>) { }

  ngOnInit(): void {
    this.Store.select('contadorApp').subscribe( contaHijo => this.contador =  contaHijo);
  }

  Multiplicar() {
    // this.contador *= 2;
    // this.cambioContadorHijo.emit(this.contador);
    this.Store.dispatch( Actions.multiplicar( { numeroMulti: 3 }));
  }

  Dividir() {
    // this.contador /= 2;
    // this.cambioContadorHijo.emit(this.contador);
    this.Store.dispatch( Actions.dividir({ numeroDiv: 2 }));
  }

  //No se necesita
  // resetNieto(event: any) {
  //     // this.contador = event;
  //     // //lee los datos enviados desde el nieto 
  //     // this.cambioContadorHijo.emit(this.contador);
  //     this.Store.dispatch(Actions.resetNieto());
  // }



}
