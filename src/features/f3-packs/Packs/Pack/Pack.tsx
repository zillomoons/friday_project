import React from "react";
import {PackType} from "../../../../main/bll/reducers/packs-reducer";
import s from "../Packs.module.css"


export const Pack = React.memo((props: PackPropsType)=>{
    const {
        handleNavigateToCard,
        handleClickDelete,
        handleClickLearn,
        handleClickEdit,
        pack,
        userName,
        isEditable,
    } = props;
    return (
        <tr>
            <td>
                <div className={s.packName}
                     onClick={handleNavigateToCard}>
                    {pack.name}
                </div>
            </td>
            <td>{pack.cardsCount}</td>
            <td>{pack.updated.slice(0,10)}</td>
            <td>{userName}</td>
            <td className={s.actionBtn}>
                {isEditable && <button className={s.deleteBtn} onClick={handleClickDelete}>Delete</button>}
                {isEditable && <button onClick={handleClickEdit}>Edit</button>}
                {!!pack.cardsCount && <button onClick={handleClickLearn}>Learn</button>}
            </td>
        </tr>
    )
})
type PackPropsType = {
    handleNavigateToCard: ()=> void
    handleClickDelete: () => void
    handleClickLearn: () => void
    handleClickEdit: () => void
    pack: PackType
    userName: string
    isEditable: boolean
}

