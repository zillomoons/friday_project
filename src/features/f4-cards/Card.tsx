import React from "react";
import {CardType} from "../../main/bll/reducers/cards-reducer";
import s from "../f3-packs/Packs/Packs.module.css";

export const Card = React.memo(({card, userId}: PropsType) =>{
    const isEditable = card.user_id === userId
    return (
        <tr>
            <td>{card.question}</td>
            <td>{card.answer}</td>
            <td>{card.updated.slice(0,10)}</td>
            <td>{card.grade}</td>
            <td className={s.actionBtn}>
                {isEditable && <button className={s.deleteBtn}>Delete</button>}
                {isEditable && <button>Edit</button>}
            </td>
        </tr>
    )
})

type PropsType = {
    card: CardType
    userId: string | null
}
