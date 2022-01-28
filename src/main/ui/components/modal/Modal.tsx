import "./Modal.css";
import {useContext, useState} from "react";
import {ModalContext} from "../../../../contexts";

export const Modal = ({title, children}: PropsType) => {
    const {closeModal} = useContext(ModalContext);
    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);

        const closeTimeout = setTimeout(()=>{
            closeModal();
            clearTimeout(closeTimeout)
        }, 700)
    }
    const backdropClasses = closing ? 'backdrop backdrop-hide': 'backdrop';
    return (
        <div className={backdropClasses} onClick={handleClose}>
            <div className='modal' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <h3>{title}</h3>
                </div>
                <div className='modal-body'>
                    {children}
                </div>
            </div>
        </div>
    )
}

type PropsType = {
    title: string
    children: React.ReactNode
}
