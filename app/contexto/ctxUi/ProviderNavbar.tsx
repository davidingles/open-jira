import { FC, useReducer } from 'react'
import { ContextoNavbar} from './ContextoNavbar'
import { uiReducer} from './uiReducer'

export interface UIState {
  menuLateral: boolean;
  isAdding: boolean;
  isArrastrando: boolean;
}
interface navProps {
 children?: React.ReactNode;
}
const UI_INITIAL_STATE: UIState = {
  menuLateral: false,
  isAdding: false,
  isArrastrando: false,
}

export const ProviderNavbar:FC<navProps> = ({ children }) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)
  
  const openSideBar = () => {
    dispatch({ type: 'UI-OPEN-SIDEBAR' })
  }
  const closeSideBar = () => {
    dispatch({ type: 'UI-CLOSE-SIDEBAR' })
  }
  const setIsAdding = (value: boolean) => {
    dispatch({ type: 'ABRE_VENTANA_TEXTO', payload: value })
  }
  const estadoArrastrando = () => {
    dispatch({ type: 'ARRASTRANDO' })
  }
  const estadoCanceloArrastrando = () => {
    dispatch({ type: 'CANCELAR_ARRASTRANDO' })
  }

 return (
   <ContextoNavbar.Provider value={{
     ...state,
     openSideBar,
     closeSideBar,
     setIsAdding,
     estadoArrastrando,
     estadoCanceloArrastrando,
   }}>
    {children}
   </ContextoNavbar.Provider>
)
}