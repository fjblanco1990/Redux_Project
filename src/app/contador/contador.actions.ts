import { createAction } from '@ngrx/store';

// los parametros son: de creationAction 1: Nombre de la accion, 2: Nombre de la funcion o tipo
export const incrementar = createAction('[Contador] Incrementar');
export const drecrementar = createAction('[Contador] Drecrementar');