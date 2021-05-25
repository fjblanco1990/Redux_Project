import { createReducer, on, props } from '@ngrx/store';
import * as Actions from './contador.actions';

export const initialState = 20;

const _contadorReducer = createReducer(initialState,
    // FORMA 1:on(incrementar, (state) => state + 1),
    // FORMA 2: on(incrementar, (state, props ) =>  state + props.numero),
    // FORMA 3:
    on(Actions.incrementar, (state, { numeroIncre } ) =>  state + numeroIncre),

    // FORMA 1: on(drecrementar, (state) => state - 1),
    // FORMA 2: on(drecrementar, (state, props) => state - props.numeroDecre),
    // FORMA 3: 
    on(Actions.drecrementar,(state , {numeroDecre}) => state - numeroDecre ),

    //  on(multiplicar, (state, props ) => state * props.numero ),
    on(Actions.multiplicar, (state, { numeroMulti }) => state * numeroMulti ),
    
    // on(dividir, (state, props) => state / props.numeroDiv),
    on(Actions.dividir, (state, { numeroDiv }) => state / numeroDiv),
    on(Actions.resetNieto, (state) => state =  initialState)
  );

  export function contadorReducer(state: any, action: any) {
      return _contadorReducer(state, action);
  }
  

// export function contadorReducer(state: number = 10, action: Action) {
//     switch (action.type) { 
//         case incrementar.type:
//             return state + 1;
//         case drecrementar.type:
//             return state - 1;   
//         default:
//             return state; 
//     }
// }