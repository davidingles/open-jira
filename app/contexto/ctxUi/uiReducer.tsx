import { UIState } from './ProviderNavbar'

type TipoDeAccion =
  | { type: 'UI-OPEN-SIDEBAR'}
  | { type: 'UI-CLOSE-SIDEBAR'}

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
    default:
      return state;
  }
}

