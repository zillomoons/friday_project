import {ModalContext} from "./ModalContext";
import {useState} from "react";

export const ModalProvider = ({children}: PropsType) => {
    const [modalOpened, setModalOpened] = useState(false);
    const [modalContent, setModalContent] = useState(null)

    const openModal = (modalConfig: ModalConfigType) => {
        const {title, content} = modalConfig;
        setModalOpened(true);
    };
    const closeModal = () => {
        setModalOpened(false);
    };

    const valueModalProvider = {
        openModal,
        closeModal
    }

    return (
        <ModalContext.Provider value={valueModalProvider}>
            {children}
        </ModalContext.Provider>
    )
}

type PropsType = {
    children: React.ReactNode
}
export type ModalConfigType = {
    title: string
    content: any
}
