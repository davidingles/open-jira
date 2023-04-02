import { TipoDeEntradas } from './ProviderEntradas'

type TiposDeAcciones =
  | { type: 'NombreDeLaAccion'}
  | { type: 'NombreDeLaAccion'}

export const entradasReducer = ( state: TipoDeEntradas, action: TiposDeAcciones): TipoDeEntradas => {

  switch (action.type) {
    // case 'NombreDeLaAccion':
    //   return {
    //     ...state,
    //   }
    // case 'NombreDeLaAccion':
    //   return {
    //     ...state,
    //   }
    default:
      return state;
  }
} 