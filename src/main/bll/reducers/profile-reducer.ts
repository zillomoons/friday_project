const initState = {
    email: '',
    name: '',
    _id: null as string | null,
    avatar: null as string | null
}
export const profileReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type){
        case "profile/SET-USER-INFO":
            return {...state, ...action.payload}
        default:
            return state;
    }
}
// Action Creators
export const setUserInfo = (data: {_id: string | null, email: string, name: string}) => ({type: 'profile/SET-USER-INFO',
    payload: {...data}} as const);

    type ActionType = ReturnType<typeof setUserInfo>

type InitStateType = typeof initState;