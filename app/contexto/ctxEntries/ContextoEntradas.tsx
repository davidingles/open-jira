import { Entradas } from '@/app/interfaces/entradas';
import { createContext } from 'react';


interface ContextProps {

    entradas: Entradas[] 

    }

export const ContextoEntradas = createContext({} as ContextProps);