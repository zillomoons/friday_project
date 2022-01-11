import s from './ForgotPass.module.css';
import SuperInput from "../../../main/ui/common/superInput/SuperInput";
import SuperButton from "../../../main/ui/common/superButton/SuperButton";
import {SuperNavLink} from "../../../main/ui/common/superNavLink/SuperNavLink";
import {PATH} from "../../../main/ui/routes/Routes";

export const ForgotPass = ({inputValue, onChange, onEnter}:ForgotPropsType) =>{
    return (
        <div className={s.container}>
            <h3>Forgot</h3>
            <SuperInput value={inputValue}
                        onEnter={onEnter}
                        onChangeText={onChange} />
            <SuperButton onClick={onEnter}>send</SuperButton>
            <SuperNavLink text='login' url={PATH.LOGIN}/>
        </div>
    )
}
type ForgotPropsType = {
    inputValue: string
    onChange: (value:string) => void
    onEnter: ()=>void
}