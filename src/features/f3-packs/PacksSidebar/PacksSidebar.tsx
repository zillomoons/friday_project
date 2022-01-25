import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsMineCards, setRangeValues } from "../../../main/bll/reducers/packs-reducer";
import { AppStoreType } from "../../../main/bll/store/store";
import { DoubleRangeSlider } from "../../../main/ui/common/doubleRangeSlider/DoubleRangeSlider";
import { debounce } from "../../../main/ui/utils/debounce";
import s from './PacksSidebar.module.css'

export const PacksSidebar = () => {
    const {
        minCardsCount,
        maxCardsCount,
        min,
        max,
    } = useSelector((state: AppStoreType) => state.packs);
    const dispatch = useDispatch();
    // values for DoubleRangeSlider
    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);
    //sets new values for min/max of cards quantity to filter packs
    const setCardsQtyRange = () => {
        dispatch(setRangeValues(minValue, maxValue));
    };
    const setMyPacks = () => {
        dispatch(setIsMineCards(true));
    }
    const setAllPacks = () => {
        dispatch(setIsMineCards(false));
    }
    // const debouncedRange = debounce(setCardsQtyRange, 3000);
    // debouncedRange();
    return (
        <div className={s.sidebarWrapper}>
            <div className={s.sidebar}>
                <h4>Show packs cards</h4>
                <div className={s.packsBelongTo}>
                    <button onClick={setMyPacks}>My</button>
                    <button onClick={setAllPacks}>All</button>
                </div>
                <div>
                    <h4>Number of cards</h4>
                    <DoubleRangeSlider
                        min={minCardsCount}
                        max={maxCardsCount}
                        setCardsQtyRange={setCardsQtyRange}
                        setRangeValue1={setMinValue}
                        setRangeValue2={setMaxValue}
                        value={[minValue, maxValue]}
                    />
                </div>
            </div>
        </div>
    )
}
