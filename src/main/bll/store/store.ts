import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {authReducer} from "../reducers/auth-reducer";
import {profileReducer} from "../reducers/profile-reducer";
import thunk, {ThunkAction, ThunkDispatch } from 'redux-thunk';
import {appReducer} from "../reducers/app-reducer";
import {packsReducer} from "../reducers/packs-reducer";
import {cardsReducer} from "../reducers/cards-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    app: appReducer,
    packs: packsReducer,
    cards: cardsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;

export type AppStoreType = ReturnType<typeof rootReducer>;

export type AppThunkDispatch = ThunkDispatch<void, AppStoreType, AnyAction>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStoreType, unknown, AnyAction>
