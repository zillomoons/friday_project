import {createContext} from 'react';
import {ModalConfigType} from "./ModalContextProvider";

export const ModalContext = createContext({
    openModal: (modalConfig: ModalConfigType)=>{},
    closeModal: ()=>{}
})
