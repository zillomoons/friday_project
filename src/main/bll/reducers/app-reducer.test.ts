import {AppInitStateType, appReducer, setError} from "./app-reducer";

let startState: AppInitStateType;
beforeEach(()=> {
    startState = {
        isLoading: false,
        appError: null,
    }
})
test('app-reducer should set correct error', () => {
    const endState = appReducer(startState, setError('invalid email'))

    expect(endState.appError).toBe('invalid email')
})