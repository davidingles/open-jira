import { UIState } from './ProviderNavbar'

type TipoDeAccion =
  | { type: 'UI-OPEN-SIDEBAR'}
  | { type: 'UI-CLOSE-SIDEBAR' }
  | { type: 'ABRE_VENTANA_TEXTO', payload: boolean }
  | { type: 'ARRASTRANDO' }
  | { type: 'CANCELAR_ARRASTRANDO' }
  

export const uiReducer = ( state: UIState, action: TipoDeAccion): UIState => {

  switch (action.type) {
    case 'UI-CLOSE-SIDEBAR':
      return {
        ...state,
        menuLateral: false
      }
    case 'UI-OPEN-SIDEBAR':
      return {
        ...state,
        menuLateral: true
      }
    case 'ABRE_VENTANA_TEXTO':
      return {
        ...state,
        isAdding: action.payload
      }
    case 'ARRASTRANDO':
      return {
        ...state,
        isArrastrando: true
      }
    case 'CANCELAR_ARRASTRANDO':
      return {
        ...state,
        isArrastrando: false
      }
    default:
      return state;
  }
}

