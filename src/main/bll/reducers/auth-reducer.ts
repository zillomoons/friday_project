import {Dispatch} from "redux";
import {setError, setLoading} from "./app-reducer";
import {authAPI} from "../../dal/authAPI";
import {setUserInfo} from "./profile-reducer";
import { AppStoreType } from "../store/store";
import { forgotAPI } from "../../dal/forgotAPI";
import { setPassAPI } from "../../dal/setPassAPI";

const initState = {
    isLoggedIn: false,
    authSuccess: false

}

export const authReducer = (state = initState, action: ActionsType): InitStateType => {
    switch (action.type){
        case "auth/SET-IS_LOGGED_IN":
        case "auth/SET-AUTH-SUCCESS":
            return { ...state, ...action.payload }
        default:
            return state;
    }
}

//Action creators
export const setIsLoggedIn = (isLoggedIn: boolean) => ({ type: 'auth/SET-IS_LOGGED_IN', payload: { isLoggedIn } } as const);

//action creator for register 
export const setAuthSuccess = (authSuccess: boolean) => ({ type: 'auth/SET-AUTH-SUCCESS', payload: {authSuccess}} as const)

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
    try{
        dispatch(setLoading(true))
        await authAPI.me();
        dispatch(setIsLoggedIn(true));
   } catch (e: any){
    dispatch(setError(e.response? e.response.data.error : 'some error'))
   } finally {
    dispatch(setLoading(false))
}
}
// Register user thunk
export const registerUser = (email: string, pass: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true))
        await authAPI.register(email, pass);
        dispatch(setAuthSuccess(true))
    } catch (e: any) {
        dispatch(setError(e.response? e.response.data.error : 'some error'))
    } finally {
        dispatch(setLoading(false))
    }
}

// Forgot password thunk
const recoveryMessage = `<div style="background-color: #ccc; padding: 15px">
password recovery link: <a href='https://zillomoons.github.io/friday_project/#/set-new-password/$token$'>
link</a></div>`

export const forgotPass = (email: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true))
        await forgotAPI.forgot(email, 'test-front-admin', recoveryMessage);
        dispatch(setAuthSuccess(true))
    } catch (e: any) {
        e.response ? dispatch(setError(e.response.data.error)) : dispatch(setError('some error'))
    } finally {
        dispatch(setLoading(false))
    }
}
// Set new password thunk
export const setNewPass = (password: string, token: string) => async(dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        await setPassAPI.setNewPass(password, token);
        dispatch(setAuthSuccess(true));
    } catch (e: any) {
        dispatch(setError(e.response? e.response.data.error : 'some error'))
    } finally {
        dispatch(setLoading(false))
    }
}

type ActionsType = ReturnType<typeof setIsLoggedIn> | ReturnType<typeof setAuthSuccess>

type InitStateType = typeof initState;
