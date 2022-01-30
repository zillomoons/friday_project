import {BsSortUp, BsSortDown} from 'react-icons/bs'
import React, {useState} from "react";

export const Sort = ({title, handleSorting}: PropsType) => {
    const [sortValue, setSorting] = useState(false) // down to reduce(убывание)

    const toggleSorting = () => {
        setSorting(prevState => !prevState)
    }
    const onClickHandler = () => {
        const value = sortValue ? 1 : 0;
        handleSorting(value + title)
    }
    return (
        <div onClick={onClickHandler}>
            {sortValue && <i onClick={toggleSorting}><BsSortDown/></i>}
            {!sortValue && <i onClick={toggleSorting}><BsSortUp/></i>}
        </div>
    )

}
type PropsType = {
    title: string
    handleSorting: (value: string) => void
}
