import {Dispatch} from "redux";
import {setError, setLoading} from "./app-reducer";
import {forgotAPI} from "../../dal/forgotAPI";

const initState = {

}
export const forgotReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type){
        default:
            return state;
    }
}

type ActionType = {
    type: string
    payload: any
}
//Thunk Creator
const recoveryMessage = `<div style="background-color: #ccc; padding: 15px">
password recovery link: <a href='http://localhost:3000/#/set-new-password/$token$'>
link</a></div>`

export const recoverPass = (email: string) => async (dispatch: Dispatch) =>{
    try {
        dispatch(setLoading(true))
        const res = await forgotAPI.forgot(email, 'test-front-admin', recoveryMessage);
    } catch (e:any) {
        e.response ? dispatch(setError(e.response.data.error)) : dispatch(setError('some error'))
    } finally {
        dispatch(setLoading(false))
    }
}

type InitStateType = typeof initState;
