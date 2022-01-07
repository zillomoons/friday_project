import {combineReducers, createStore} from "redux";
import {loginReducer} from "../reducers/login-reducer";
import {registerReducer} from "../reducers/register-reducer";
import {passRecoverReducer} from "../reducers/pass-recover-reducer";
import {setPassReducer} from "../reducers/set-pass-reducer";
import {profileReducer} from "../reducers/profile-reducer";

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    passRecover: passRecoverReducer,
    setPass: setPassReducer,
    profile: profileReducer,
})

const store = createStore(rootReducer)

export default store;

export type AppStoreType = ReturnType<typeof rootReducer>;