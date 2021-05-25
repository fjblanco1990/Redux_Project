import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import * as actions from './contador/contador.actions';

//se debe llamar igual que la variable obeto del appModule
// interface AppState {
//   contadorApp: number
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {

  contador!: number;

  constructor(private store: Store<AppState> ) {
    // this.contador = 10;
    
     this.store.select('contadorApp').subscribe( conta =>  this.contador = conta);
    // this.store.select('contadorApp').subscribe(contadorNodo => {
    //   console.log(contadorNodo);
    // });
  }

  Incrementar() {
    // this.contador = this.contador + 1;
    this.store.dispatch(actions.incrementar({ numeroIncre: 1 }));
  }

  Drecrementar() {
    // this.contador = this.contador - 1;
    this.store.dispatch(actions.drecrementar({ numeroDecre: 1 }));
  }
}
