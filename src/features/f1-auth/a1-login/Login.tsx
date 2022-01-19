import s from './login.module.css'
import SuperInput from "../../../main/ui/common/superInput/SuperInput";
import SuperButton from "../../../main/ui/common/superButton/SuperButton";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../main/bll/reducers/auth-reducer";
import SuperCheckbox from "../../../main/ui/common/supperCheckbox/SuperCheckbox";
import {AppStoreType} from "../../../main/bll/store/store";
import {Navigate} from "react-router-dom";
import {PATH} from "../../../main/ui/routes/Routes";

export const Login = () => {
    const isLoggedIn = useSelector((state:AppStoreType)=> state.login.isLoggedIn)
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [rememberMe, setRememberMe] = useState(false)
    const onLogin = () => {
        dispatch(login(email, pass, rememberMe))
    }
    if(isLoggedIn){
        return <Navigate to={PATH.PROFILE} />
    }
    return (
        <div className={s.loginContainer}>
            <h3>Login</h3>
            <SuperInput value={email} onChange={e=> setEmail(e.currentTarget.value)} />
            <SuperInput value={pass} onChange={e=> setPass(e.currentTarget.value)}/>
            <label className={s.checkBox}>
                <SuperCheckbox /> remember me
            </label>
            <SuperButton onClick={onLogin}>LOGIN</SuperButton>
        </div>

    )
}