import { FC, useReducer } from 'react'
import { ContextoEntradas} from './ContextoEntradas'
import { entradasReducer } from './entradasReducer'
import { Entradas } from '@/app/interfaces/entradas';
import { v4 as uuidv4 } from 'uuid';

export interface TipoDeEntradas {
 entradas: Entradas[];
}
interface Props {
 children?: JSX.Element | JSX.Element[];
}
const UI_INITIAL_STATE: TipoDeEntradas = {
  entradas: [
    {
      _id: uuidv4(),
      descripcion: 'Entrada 1 en progreso',
      fechaCreacion: 1,
      estado: 'en progreso',
   },
    {
      _id: uuidv4(),
      descripcion: 'Entrada 2',
      fechaCreacion: /* Date.now() - 1000 * 60 * 60 * 24 * 2 */ 2,
      estado: 'pendiente',
   },
    {
      _id: uuidv4(),
      descripcion: 'Entrada 3',
      fechaCreacion: /* Date.now() - 1000 * 60 * 60 * 24 * 3 */ 3,
      estado: 'terminado',
   },
 ],
}

export const ProviderEntradas:FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(entradasReducer, UI_INITIAL_STATE)
  
  const addNewTask = (descripcion: string) => {
    const newTask: Entradas  = {
      _id: uuidv4(),
      descripcion,
      fechaCreacion: Date.now(),
      estado: 'pendiente',
    }
    dispatch({
      type: 'Nueva_Entrada',
      payload: newTask
    })
  }

 return (
   <ContextoEntradas.Provider value={{
     ...state,
     //methods
      addNewTask,
   }}>
    {children}
   </ContextoEntradas.Provider>
)
}