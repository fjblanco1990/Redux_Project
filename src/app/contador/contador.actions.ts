import { createAction, props } from '@ngrx/store';

// ACCIONES
// los parametros son: de creationAction 1: Nombre de la accion, 2: Nombre de la funcion o tipo
// FORMA 1: export const incrementar = createAction('[variable] Incrementar');
// FORMA 2:
export const incrementar = createAction(
    '[variable] Incrementar',
    props<{numeroIncre: number}>()
);
//FORMA 1: export const drecrementar = createAction('[variable] Drecrementar');
//FORMA 2:
 export const drecrementar = createAction(
     '[variable] Drecrementar',
    props<{ numeroDecre: number}>()
     );
//con props se espesifica que tipo de informacion puedo recibir
export const multiplicar = createAction(
    '[variable] Multiplicar',
    props<{ numeroMulti: number }>()
);

export const dividir = createAction(
    '[variable] Dividir',
    props<{ numeroDiv: number }>()
);

export const resetNieto = createAction(
    '[variable] Reset'
)