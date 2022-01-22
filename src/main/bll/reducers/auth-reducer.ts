import {Dispatch} from "redux";
import {setError, setLoading} from "./app-reducer";
import {authAPI} from "../../dal/authAPI";
import {setUserInfo} from "./profile-reducer";
import { AppStoreType } from "../store/store";

const initState = {
    isLoggedIn: false,

}

export const authReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type){
        case "login/SET-IS_LOGGED_IN":
            return {...state, ...action.payload}
        default:
            return state;
    }
}

//Action creators
export const setIsLoggedIn = (isLoggedIn: boolean) => ({type: 'login/SET-IS_LOGGED_IN', payload: {isLoggedIn}} as const);

//Thunk creators
export const login = (email: string, password: string, rememberMe: boolean) => async(dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        const res = await authAPI.login(email, password, rememberMe);
        dispatch(setUserInfo(res.data));
        dispatch(setIsLoggedIn(true))
    } catch (e:any) {
        dispatch(setError(e.response? e.response.data.error : 'some error'))
    } finally {
        dispatch(setLoading(false))
    }
}
export const logout = () => async(dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        await authAPI.logout();
        dispatch(setIsLoggedIn(false));
    } catch (e:any) {
        dispatch(setError(e.response? e.response.data.error : 'some error'))
    } finally {
        dispatch(setLoading(false))
    }
}

export const authMe = () => async (dispatch: Dispatch, getState: ()=> AppStoreType) => {
   const userId = getState().profile._id
    try{
    dispatch(setLoading(true))
    const res = await authAPI.me();
    if(res.data._id === userId){
        
    }
    
   } catch (e: any){
    dispatch(setError(e.response? e.response.data.error : 'some error'))
   } finally {
    dispatch(setLoading(false))
}
}

type ActionType = ReturnType<typeof setIsLoggedIn>

type InitStateType = typeof initState;
