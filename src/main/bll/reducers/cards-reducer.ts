import {Dispatch} from "redux";
import {setError, setLoading} from "./app-reducer";
import {cardsAPI} from "../../dal/cardsAPI";
import {AppStoreType, AppThunk} from "../store/store";

const initState = {
    cards: [] as CardType[],
    max: 5,
    min: 0,
    page: 1,
    pageCount: 10,
    packUserId: null as string | null,
    cardsTotalCount: 20,
    cardQuestion: '',
    cardAnswer: '',
    sortCards: '1grade'
}

export const cardsReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type){
        case "cards/SET-CARDS":
        case "cards/SET-PAGE-COUNT":
        case "cards/SET-CURRENT-PAGE":
            return {...state, ...action.payload};
        default:
            return state;
    }
}
//Action creators
export const setCards = (cards: CardType[], cardsTotalCount: number) => ({type: 'cards/SET-CARDS', payload: {cards, cardsTotalCount} } as const);
export const setCardsPageCount = (pageCount: number) => ({type: 'cards/SET-PAGE-COUNT', payload: {pageCount} } as const);
export const setCardsPage = (page: number) => ({type: "cards/SET-CURRENT-PAGE", payload: {page}} as const );


//Thunk creators

export const getCards = (pack_id: string | null) => async (dispatch: Dispatch, getState: () => AppStoreType) => {
    const {max, min, page, pageCount, cardAnswer, cardQuestion, sortCards} = getState().cards
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        const res = await cardsAPI.getCards(pack_id, cardAnswer, cardQuestion, min,max, sortCards, page, pageCount);
        dispatch(setCards(res.data.cards, res.data.cardsTotalCount))
    } catch (e: any) {
        dispatch(setError(e.response? e.response.data.error : 'some error'));
    } finally {
        dispatch(setLoading(false));
    }
}
export const createCard = (cardsPack_id: string | null, question?: string, answer?: string): AppThunk => async dispatch => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        await cardsAPI.createCard({cardsPack_id, question, answer})
        dispatch(getCards(cardsPack_id));
    } catch (e: any) {
        dispatch(setError(e.response? e.response.data.error : 'some error'));
    } finally {
        dispatch(setLoading(false));
    }
}
export const updateCard = (cardsPack_id: string, _id: string, question?:string, answer?: string):AppThunk => async dispatch => {
    try{
        dispatch(setLoading(true));
        await cardsAPI.updateCard({_id, question, answer})
        dispatch(getCards(cardsPack_id));
    }catch (e:any) {
        dispatch(setError(e.response? e.response.data.error : 'some error'));
    } finally {
        dispatch(setLoading(false));
    }
}
export const deleteCard = (cardsPack_id: string, id: string):AppThunk => async dispatch => {
    try{
        dispatch(setLoading(true));
        await cardsAPI.deleteCard(id)
        dispatch(getCards(cardsPack_id));
    }catch (e:any) {
        dispatch(setError(e.response? e.response.data.error : 'some error'));
    } finally {
        dispatch(setLoading(false));
    }
}
export const updateCardGrade = (cardsPack_id: string, _id: string, grade: number): AppThunk => async dispatch => {
    try{
        dispatch(setLoading(true));
        await cardsAPI.updateCardGrade(_id, grade);
        dispatch(getCards(cardsPack_id));
    }catch (e:any) {
        dispatch(setError(e.response? e.response.data.error : 'some error'));
    } finally {
        dispatch(setLoading(false));
    }
}

// Types
type InitStateType = typeof initState;
type ActionType = ReturnType<typeof setCards> | ReturnType<typeof setCardsPageCount> | ReturnType<typeof setCardsPage>

export type CardType = {
    answer: string
    question: string
    cardsPack_id: string | null
    grade: number
    shots: number
    user_id: string
    created: string
    updated: string
    _id: string
}
