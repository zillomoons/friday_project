import { Dispatch } from "redux";
import { packsAPI } from "../../dal/packsAPI";
import { setError, setLoading } from "./app-reducer";
import { AppStoreType, AppThunk } from "../store/store";

const initState = {
    cardPacks: [] as PackType[],
    minCardsCount: 0, // min and max of our slider
    maxCardsCount: 120,
    page: 1,
    pageCount: 10,
    cardsPacksTotalCount: 50,
    packName: '',
    min: 0, // min and max that user selected
    max: 25,
    isMine: false,
    sortPacks: '',
}

export const packsReducer = (state = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case "packs/SET-PACKS":
        case "packs/SET-RANGE-VALUES":
        case "packs/SET-CARDS-COUNT":
        case 'packs/SET-IS-MINE-CARDS':
        case "packs/SET-PACK-NAME": 
            return { ...state, ...action.payload }
        default:
            return state;
    }
}

//Action creators
export const setPacks = (cardPacks: PackType[]) => ({ type: 'packs/SET-PACKS', payload: { cardPacks } } as const)
export const setCardsCount = (minCardsCount: number, maxCardsCount: number) => ({
    type: 'packs/SET-CARDS-COUNT',
    payload: { minCardsCount, maxCardsCount }
} as const);
export const setRangeValues = (min: number, max: number) => ({ type: 'packs/SET-RANGE-VALUES', payload: { min, max } } as const)
export const setIsMineCards = (isMine: boolean) => ({ type: 'packs/SET-IS-MINE-CARDS', payload: { isMine } } as const)
export const setPackName = (packName: string) => ({ type: "packs/SET-PACK-NAME", payload: {packName}} as const)

//Thunk creators
export const getPacks = () => async (dispatch: Dispatch, getState: () => AppStoreType) => {
    const { packName, min, max, page, pageCount, isMine, sortPacks } = getState().packs
    const user_id = isMine ? getState().profile._id : null;
    //how to add
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        const res = await packsAPI.getPacks(packName, min, max, sortPacks, page, pageCount, user_id);
        dispatch(setPacks(res.data.cardPacks));
        dispatch(setCardsCount(res.data.minCardsCount, res.data.maxCardsCount))
    } catch (e: any) {
        dispatch(setError(e.response ? e.response.data.error : 'some error'))
    } finally {
        dispatch(setLoading(false))
    }
}

export const createPack = (name: string): AppThunk => async dispatch => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        await packsAPI.createPack(name);
        dispatch(getPacks())

    } catch (e: any) {
        dispatch(setError(e.response ? e.response.data.error : 'some error'))
    } finally {
        dispatch(setLoading(false))
    }
}

export const deletePack = (id: string): AppThunk => async dispatch => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        await packsAPI.deletePack(id);
        dispatch(getPacks())
    } catch (e: any) {
        dispatch(setError(e.response ? e.response.data.error : 'some error'))
    } finally {
        dispatch(setLoading(false))
    }
}

export const updatePack = (id: string, name?: string): AppThunk => async dispatch => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        await packsAPI.updatePack(id, name);
        dispatch(getPacks())
    } catch (e: any) {
        dispatch(setError(e.response ? e.response.data.error : 'some error'))
    } finally {
        dispatch(setLoading(false))
    }
}

//Types

type InitStateType = typeof initState;

type ActionsType = ReturnType<typeof setPacks>
    | ReturnType<typeof setRangeValues>
    | ReturnType<typeof setCardsCount>
    | ReturnType<typeof setIsMineCards>
    | ReturnType<typeof setPackName>

export type PackType = {
    _id: string
    user_id: string
    name: string
    cardsCount: number
    created: string
    updated: string
    grade: number
    shots: 0
    user_name: string
    private: false
}