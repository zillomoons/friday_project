import s from './Packs.module.css';
import {PackType, setSortPacks} from "../../../main/bll/reducers/packs-reducer";
import React from 'react';
import {PackContainer} from "./Pack/PackContainer";
import {Sort} from "../../../main/ui/components/sort/Sort";
import {useDispatch} from "react-redux";

export const Packs = React.memo(({packs, headers, userId, onRemovingPack, onEditingPack}: PropsType) => {
    const dispatch = useDispatch();

    const handleSorting = (value: string) => {
        dispatch(setSortPacks(value))
    }

    const mappedHeaders = headers.map(({value, title}, i) => <th key={i}>
        {value}<Sort title={title} handleSorting={handleSorting}/>
    </th>);

    const mappedPacks = packs.map(p => <PackContainer key={p._id} pack={p}
                                                      userId={userId}
                                                      onRemovingPack={onRemovingPack}
                                                      onEditingPack={onEditingPack}
    />)
    return (
        <table className={s.packsTable}>
            <tbody>
            <tr>{mappedHeaders}</tr>
            {mappedPacks}
            </tbody>
        </table>
    )
})

type PropsType = {
    packs: PackType[]
    headers: Array<{ title: string, value: string }>
    userId: string | null
    onRemovingPack: (id: string) => void
    onEditingPack: (id: string, name?: string) => void
}

