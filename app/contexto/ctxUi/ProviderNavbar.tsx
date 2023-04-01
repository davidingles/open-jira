import { FC, useReducer } from 'react'
import { ContextoNavbar} from './ContextoNavbar'
import { uiReducer} from './uiReducer'

export interface UIState {
 menuLateral: boolean;
}
interface navProps {
 children?: React.ReactNode;
}
const UI_INITIAL_STATE: UIState = {
 menuLateral: false,
}

export const ProviderNavbar:FC<navProps> = ({ children }) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)
  
  const openSideBar = () => {
    dispatch({ type: 'UI-OPEN-SIDEBAR' })
  }
  const closeSideBar = () => {
    dispatch({ type: 'UI-CLOSE-SIDEBAR' })
  }

 return (
   <ContextoNavbar.Provider value={{...state, openSideBar, closeSideBar}}>
    {children}
   </ContextoNavbar.Provider>
)
}