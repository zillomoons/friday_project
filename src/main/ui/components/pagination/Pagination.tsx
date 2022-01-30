import s from "./Pagination.module.css";
import { AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
import React, {ChangeEvent} from "react";

export const Pagination = ({
                               totalCount, currentPage, pageCount,
                               onChangePageCount,
                               onPageChange, disabled
                           }: PropsType) => {
    //pageCount
    const pageCountOptions = [5, 10, 15, 20, 30, 50, 100];
    const options = pageCountOptions.map(o => <option key={o} value={o}>{o}</option>);
    const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangePageCount(+e.currentTarget.value);
    }
    //pagination
    let pages = [];
    const activeBtn = {background: '#21268F', color: '#ffffff'}
    const lastPage = Math.ceil(totalCount / pageCount);
    const goToNextPage = () => {
        onPageChange(currentPage + 1)
    };
    const goToPrevPage = () => {
        onPageChange(currentPage - 1)
    };
    const changePage = (e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.textContent && onPageChange(+e.currentTarget.textContent)
    };

    for (let i = 1; i <= lastPage; i++) pages.push((<button key={i}
                                                            disabled={disabled}
                                                            style={currentPage === i ? activeBtn : undefined}
                                                            onClick={changePage}>{i}</button>))


    if ((currentPage + 4) < lastPage) {
        pages[currentPage + 2] = (<span key={currentPage + 3}>...</span>);

        pages = pages.filter((p, i) => i < (currentPage + 3) || i === (lastPage - 1));

    }

    if (currentPage > 5) {
        pages[1] = (<span key={2}>...</span>);

        pages = pages.filter((p, i) => i < 2 || i > currentPage - 4);
    }

    return (
        <div className={s.pageControl}>
            <div className={s.pageCount}>
                <div>Show</div>
                <select value={pageCount} onChange={handleOnChange}>
                    {options}
                </select>
                <div>elements per page</div>
            </div>
            <div className={s.pagination}>
                <button onClick={goToPrevPage} disabled={currentPage === 1 || disabled}><AiOutlineLeft/></button>
                {pages}
                <button onClick={goToNextPage} disabled={currentPage === lastPage || disabled}><AiOutlineRight/>
                </button>

            </div>
        </div>

    )
}
type PropsType = {
    totalCount: number // total count of data (ex. packs)
    currentPage: number
    pageCount: number
    onPageChange: (page: number) => void
    disabled: boolean
    onChangePageCount: (count: number) => void

}
