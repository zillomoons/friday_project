import {ModalContext} from "./ModalContext";
import {useState} from "react";
import {Modal} from "../../main/ui/components";

export const ModalProvider = ({children}: PropsType) => {
    const testModal = {title: "Hi!", children: "It's modal"}
    const [modalOpened, setModalOpened] = useState(false);
    const [modalContent, setModalContent] = useState<ModalConfigType>(testModal)

    const openModal = (modalConfig: ModalConfigType) => {
        setModalOpened(true);
        setModalContent(modalConfig)
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
            {modalOpened && modalContent && <Modal {...modalContent} />}
            {children}
        </ModalContext.Provider>
    )
}

type PropsType = {
    children: React.ReactNode
}
export type ModalConfigType = {
    title: string
    children: React.ReactNode
}
