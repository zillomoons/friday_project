import SuperButton from "../../../common/superButton/SuperButton";
import {useContext, useEffect} from "react";
import {getCards} from "../../../../bll/reducers/cards-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../bll/store/store";
import {Preloader} from "../../../common/preloader/Preloader";
import { LearnPackModalWithAnswer } from "./LearnPackModalWithAnswer";
import {ModalContext} from "../../../../../contexts";


export const LearnPackModal = ({packId, closeModal, packName}: PropsType) => {
    const dispatch = useDispatch();
    const {openModal} = useContext(ModalContext);
    useEffect(() => {
        dispatch(getCards(packId))
    }, [dispatch, packId])
    const cards = useSelector((state: AppStoreType)=> state.cards.cards);
    const handleClick = () => {
        openModal({
            title: packName,
            children: <LearnPackModalWithAnswer packId={packId} closeModal={closeModal} />
        })

    }
    if(!cards.length){
        return <Preloader />
    }
    return (
        <>
            <p style={{margin: '40px 0'}}>
                <b>Question:</b> {cards[0].question}
            </p>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <SuperButton style={{backgroundColor: '#D7D8EF', width: '200px'}}
                             onClick={closeModal}
                >
                    Cancel
                </SuperButton>
                <SuperButton style={{width: '200px'}} onClick={handleClick}>
                    Show answer
                </SuperButton>
            </div>

        </>
    )
}
type PropsType = {
    packId: string
    packName: string
    closeModal: () => void
}
