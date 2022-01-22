import s from './login.module.css'
import SuperInput from "../../../main/ui/common/superInput/SuperInput";
import SuperButton from "../../../main/ui/common/superButton/SuperButton";
import { useState } from "react";
import SuperCheckbox from "../../../main/ui/common/supperCheckbox/SuperCheckbox";
export const Login = ({ onLogin }: PropsType) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const handleLogin = () => onLogin(email, pass, rememberMe)

    return (
        <div className={s.authWrapper}>
            <div className={s.loginContainer}>
                <h3>Login</h3>
                <SuperInput value={email} onChange={e => setEmail(e.currentTarget.value)} />
                <SuperInput value={pass} onChange={e => setPass(e.currentTarget.value)} />
                <label className={s.checkBox}>
                    <SuperCheckbox /> remember me
                </label>
                <SuperButton onClick={handleLogin}>LOGIN</SuperButton>
            </div>
        </div>
    )
}
type PropsType = {
    onLogin: (email: string, pass: string, rememberMe: boolean) => void
}