import React from 'react';
import s from './Cards.module.css';
import {CardType} from "../../main/bll/reducers/cards-reducer";
import {CardContainer} from "./CardContainer";

export const Cards = React.memo(({headers, cards, userId, packId}: PropsType) => {
    const mappedHeaders = headers.map((el, i)=><th key={i}>{el}</th>);
    const mappedCards = cards.map(el=> <CardContainer key={el._id} card={el} userId={userId} packId={packId}/>)
    return (
        <table className={s.cardsTable}>
            <tbody>
            <tr>{mappedHeaders}</tr>
            {mappedCards}
            </tbody>
        </table>
    )
});

type PropsType = {
    headers: string[]
    cards: CardType[]
    userId: string | null
    packId: string | null
}
