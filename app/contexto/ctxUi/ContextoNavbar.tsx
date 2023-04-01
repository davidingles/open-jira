import { createContext } from 'react';


interface ContextProps {

    menuLateral: boolean;
    openSideBar: () => void;
    closeSideBar: () => void;

    }

export const ContextoNavbar = createContext({} as ContextProps);  