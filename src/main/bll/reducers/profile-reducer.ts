const initState = {
    email: '',
    password: '',
    _id: null as string | null
}
export const profileReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type){
        default:
            return state;
    }
}
// Action Creators
export const setUserInfo = (email: string, name: string, avatar?: string) => ({} as const);

    type ActionType = {
    type: string
    payload: any
}

type InitStateType = typeof initState;