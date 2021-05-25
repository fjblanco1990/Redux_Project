import {  createReducer, on } from "@ngrx/store";
import { drecrementar, incrementar } from "./contador.actions";

export const initialState = 20;

const _contadorReducer = createReducer(initialState,
    on(incrementar, (state) => state + 1),
    on(drecrementar, (state) => state - 1)
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