import { Entradas } from '@/app/interfaces/entradas';
import { createContext } from 'react';


interface ContextProps {

    entradas: Entradas[] 
    addTarea: (descripcion: string) => void
    onEntradaActualizada: (entrada: Entradas) => void
    }

export const ContextoEntradas = createContext({} as ContextProps);