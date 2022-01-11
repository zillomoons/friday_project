const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingActionType): InitStateType => {
    switch (action.type){
        case "SET-LOADING":
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export const loadingAC = (isLoading: boolean) => ({type: 'SET-LOADING', payload: {isLoading}})

export type LoadingActionType = ReturnType<typeof loadingAC>;

type InitStateType = typeof initState;
