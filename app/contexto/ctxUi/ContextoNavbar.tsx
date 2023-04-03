import { createContext } from 'react';


interface ContextProps {

    menuLateral: boolean;
    isAdding: boolean;
    isArrastrando: boolean;
    openSideBar: () => void;
    closeSideBar: () => void;
    setIsAdding: (value: boolean) => void;
    estadoArrastrando: () => void;
    estadoCanceloArrastrando: () => void;
    
    }

export const ContextoNavbar = createContext({} as ContextProps);  