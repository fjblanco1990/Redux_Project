import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { resetNieto } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  // escuchar los datos del padre y del hijo
  // @Input()
  contador!: number;
  //emite el envento para enviar los datos a el hijo y el pádre desde el nieto
  // @Output() cambioContadorHijo = new EventEmitter<number>();
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contadorApp').subscribe( contadorNieto => this.contador = contadorNieto);
  }


  reset() {
    // this.contador = 0;
    // this.cambioContadorHijo.emit(this.contador);
    this.store.dispatch(resetNieto());
  }
}
