import s from './ForgotPass.module.css';
import SuperInput from "../../../main/ui/common/superInput/SuperInput";
import SuperButton from "../../../main/ui/common/superButton/SuperButton";
import {SuperNavLink} from "../../../main/ui/common/superNavLink/SuperNavLink";
import {PATH} from "../../../main/ui/routes/Routes";

export const ForgotPass = ({inputValue, onChange, onEnter, isLoading, error}:ForgotPropsType) =>{
    return (
        <div className={s.container}>
            <div style={{height: '50px'}}>
                <h3>Forgot</h3>
                {isLoading && <div style={{color: '#FF4500FF'}}>...Loading</div>}
                {error && <div style={{color: "red"}}>{error}</div>}
            </div>
            <SuperInput value={inputValue}
                        onEnter={onEnter}
                        disabled={isLoading}
                        onChangeText={onChange} />
            <SuperButton disabled={isLoading} onClick={onEnter}>send</SuperButton>
            <SuperNavLink text='login' url={PATH.LOGIN}/>
        </div>
    )
}
type ForgotPropsType = {
    inputValue: string
    onChange: (value:string) => void
    onEnter: ()=>void
    isLoading: boolean
    error: string | null
}