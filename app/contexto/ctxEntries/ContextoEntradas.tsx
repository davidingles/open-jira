import { Entradas } from '@/app/interfaces/entradas';
import { createContext } from 'react';


interface ContextProps {

    entradas: Entradas[],
    addNewTask: (descripcion: string) => void,

    }

export const ContextoEntradas = createContext({} as ContextProps);