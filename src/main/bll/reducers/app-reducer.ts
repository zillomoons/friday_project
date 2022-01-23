import { Dispatch } from "redux";
import { authAPI } from "../../dal/authAPI";
import { setIsLoggedIn } from "./auth-reducer";
import { setUserInfo } from "./profile-reducer";

const initState = {
    isLoading: false,
    appError: null as string | null,
    isInitialized: false

}

export const appReducer = (state = initState, action: ActionType): AppInitStateType => {
    switch (action.type) {
        case "SET-LOADING":
        case "SET-ERROR":
        case "app/SET-IS-INITIALIZED":
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
//Action creators
export const setError = (appError: string | null) => ({ type: 'SET-ERROR', payload: { appError } } as const)
export const setLoading = (isLoading: boolean) => ({ type: 'SET-LOADING', payload: { isLoading } } as const)
export const setIsInitialized = (isInitialized: boolean) => ({ type: 'app/SET-IS-INITIALIZED', payload: { isInitialized } } as const)


//Thunk creators
export const initializeApp = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true))
        const res = await authAPI.me();
        dispatch(setUserInfo(res.data));
        dispatch(setIsLoggedIn(true));
    } catch (e: any) {
        dispatch(setError(e.response ? e.response.data.error : 'some error'))
    } finally {
        dispatch(setLoading(false));
        dispatch(setIsInitialized(true));
    }
}

export type AppInitStateType = typeof initState;
type ActionType = ReturnType<typeof setLoading> | ReturnType<typeof setError> | ReturnType<typeof setIsInitialized>