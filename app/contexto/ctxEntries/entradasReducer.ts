import { TipoDeEntradas } from './ProviderEntradas'
import { Entradas } from '@/app/interfaces/entradas';


type TiposDeAcciones =
  | { type: 'addTarea', payload: Entradas }
  | { type: 'TareaActualizada', payload: Entradas }

export const entradasReducer = ( state: TipoDeEntradas, action: TiposDeAcciones): TipoDeEntradas => {

  switch (action.type) {
     case 'addTarea':
       return {
         ...state,
         entradas: [...state.entradas, action.payload]
      }
    case 'TareaActualizada':
      return {
        ...state,
        entradas: state.entradas.map(entrada => {
          if (entrada._id === action.payload._id) {
            entrada.estado = action.payload.estado
          }
          return entrada
        })
      }
    default:
      return state;
  }
} 