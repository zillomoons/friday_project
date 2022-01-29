import React from "react";
import {CardType} from "../../main/bll/reducers/cards-reducer";
import s from "../f3-packs/Packs/Packs.module.css";


export const Card = React.memo(({card, userId, handleUpdateCard, handleDeleteCard}: PropsType) =>{

    const isEditable = card.user_id === userId
    return (
        <tr>
            <td>{card.question}</td>
            <td>{card.answer}</td>
            <td>{card.updated.slice(0,10)}</td>
            <td>{card.grade}</td>
            <td className={s.actionBtn}>
                {isEditable && <button onClick={handleDeleteCard} className={s.deleteBtn}>Delete</button>}
                {isEditable && <button onClick={handleUpdateCard}>Edit</button>}
            </td>
        </tr>
    )
})

type PropsType = {
    card: CardType
    userId: string | null
    handleUpdateCard: ()=>void
    handleDeleteCard: () => void
}
