import { TipoDeEntradas } from './ProviderEntradas'
import { Entradas } from '@/app/interfaces/entradas';


type TiposDeAcciones = {
    type: 'addTarea'
    payload: Entradas
  }

export const entradasReducer = ( state: TipoDeEntradas, action: TiposDeAcciones): TipoDeEntradas => {

  switch (action.type) {
     case 'addTarea':
       return {
         ...state,
         entradas: [...state.entradas, action.payload]
       }
    default:
      return state;
  }
} 