import SuperButton from "../../../common/superButton/SuperButton";
import {useEffect, useState} from "react";
import {getCards} from "../../../../bll/reducers/cards-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../bll/store/store";
import {Preloader} from "../../../common/preloader/Preloader";
import SuperRadio from "../../../common/superRadio/SuperRadio";



export const LearnPackModalWithAnswer = ({packId, closeModal}: PropsType) => {
    const options = ['Did not know', 'Forgot', 'A lot of thought', 'Confused', 'Knew the answer'];
    const [value, onChangeOption] = useState(options[1])
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCards(packId))
    }, [dispatch, packId])
    const cards = useSelector((state: AppStoreType)=> state.cards.cards);
    const handleClick = () => {
        closeModal();
    }
    if(!cards.length){
        return <Preloader />
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '35px'}}>
            <div>
                <div><b>Question:</b> {cards[0].question}</div>
                <div><b>Answer:</b> {cards[0].answer}</div>
            </div>
            <div>
                <b>Rate yourself:</b>
                <div>
                    <SuperRadio options={options} value={value} onChangeOption={onChangeOption}  />
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <SuperButton style={{backgroundColor: '#D7D8EF', width: '200px'}}
                             onClick={closeModal}
                >
                    Cancel
                </SuperButton>
                <SuperButton style={{width: '200px'}} onClick={handleClick}>
                    Next
                </SuperButton>
            </div>

        </div>
    )
}
type PropsType = {
    packId: string
    closeModal: () => void
}
