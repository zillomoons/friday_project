import {Dispatch} from "redux";
import {setError, setLoading} from "./app-reducer";
import {authAPI} from "../../dal/authAPI";

const initState = {
    isLoggedIn: false,

}

export const authReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type){
        default:
            return state;
    }
}

//Action creators
export const setIsLoggedIn = () => ({} as const);


//Thunk creators
export const login = (email: string, password: string, rememberMe: boolean) => async(dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        const res = await authAPI.login(email, password, rememberMe);


    } catch (e:any) {
        dispatch(setError(e.response? e.response.data.error : 'some error'))
    } finally {
        dispatch(setLoading(false))
    }
}

type ActionType = {
    type: string
    payload: any
}

type InitStateType = typeof initState;
