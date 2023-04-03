import { Entradas } from '@/app/interfaces/entradas';
import { createContext } from 'react';


interface ContextProps {

    entradas: Entradas[] 
    addTarea: (descripcion: string) => void

    }

export const ContextoEntradas = createContext({} as ContextProps);