import SuperButton from "../../../common/superButton/SuperButton";
import {useEffect, useState} from "react";
import {CardType, getCards, updateCardGrade} from "../../../../bll/reducers/cards-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../bll/store/store";
import {Preloader} from "../../../common/preloader/Preloader";
import SuperRadio from "../../../common/superRadio/SuperRadio";
import s from "./LearnPackModal.module.css";
import {getRandomCard} from "../../../utils/getRandomCard";


export const LearnPackModal = ({packId, closeModal}: PropsType) => {
    const options = ['Did not know', 'Forgot', 'A lot of thought', 'Confused', 'Knew the answer'];
    const [showAnswer, setShowAnswer] = useState(false);
    const cards = useSelector((state: AppStoreType)=> state.cards.cards);
    const dispatch = useDispatch();
    const [value, onChangeOption] = useState(options[1]);
    const [card, setCard] = useState<CardType>({
        answer: 'init answer',
        question: 'init question',
        cardsPack_id: '',
        grade: 0,
        shots: 0,
        user_id: 'string',
        created: 'string',
        updated: 'string',
        _id: 'string',
    })
    useEffect(() => {
        dispatch(getCards(packId));
        cards.length && setCard(getRandomCard(cards));
    }, [dispatch, packId])

    const handleShowAnswer = () => {
        setShowAnswer(true);
    }
    const handleClickNext = () => {
        dispatch(updateCardGrade(packId, card._id, options.indexOf(value) + 1) )
        setShowAnswer(false);
        setCard(getRandomCard(cards));
    }
    if(!cards.length){
        return <Preloader />
    }
    return (
        <>
            <div className={s.main}>
                <div><b>Question:</b> {card.question}</div>
                {showAnswer && <div><b>Answer:</b> {card.answer}</div>}
            </div>
            {showAnswer && <div className={s.options}>
                <b>Rate yourself:</b>
                <SuperRadio options={options} value={value} onChangeOption={onChangeOption}  />
            </div>}
            <div className={s.buttons}>
                <SuperButton style={{backgroundColor: '#D7D8EF'}} onClick={closeModal}>Cancel</SuperButton>
                {!showAnswer && <SuperButton onClick={handleShowAnswer}>Show answer</SuperButton>}
                {showAnswer && <SuperButton onClick={handleClickNext}>Next</SuperButton>}
            </div>

        </>
    )
}
type PropsType = {
    packId: string
    closeModal: () => void
}
