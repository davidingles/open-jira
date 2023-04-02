import { Entradas } from '@/app/interfaces/entradas';
import { TipoDeEntradas } from './ProviderEntradas'

type TiposDeAcciones = { type: 'Nueva_Entrada', payload: Entradas }

export const entradasReducer = ( state: TipoDeEntradas, action: TiposDeAcciones): TipoDeEntradas => {

  switch (action.type) {
    case 'Nueva_Entrada':
      return {
        ...state,
        entradas: [...state.entradas, action.payload]
      }
    default:
      return state;
  }
} 