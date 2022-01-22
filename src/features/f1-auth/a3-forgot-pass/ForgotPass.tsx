import s from './ForgotPass.module.css';
import SuperInput from "../../../main/ui/common/superInput/SuperInput";
import SuperButton from "../../../main/ui/common/superButton/SuperButton";
import { SuperNavLink } from "../../../main/ui/common/superNavLink/SuperNavLink";
import { PATH } from "../../../main/ui/routes/Routes";
import { useSelector } from "react-redux";
import { AppStoreType } from "../../../main/bll/store/store";

export const ForgotPass = ({ inputValue, onChange, onEnter, isLoading }: ForgotPropsType) => {
    return (
        <div className={s.authWrapper}>
            <div className={s.container}>
                <h3>Forgot</h3>
                <RequestStatusInfo />
                <SuperInput value={inputValue}
                    onEnter={onEnter}
                    disabled={isLoading}
                    onChangeText={onChange} />
                <SuperButton disabled={isLoading} onClick={onEnter}>send</SuperButton>
                <SuperNavLink text='login' url={PATH.LOGIN} />
            </div>
        </div>

    )
}
type ForgotPropsType = {
    inputValue: string
    onChange: (value: string) => void
    onEnter: () => void
    isLoading: boolean
}
const RequestStatusInfo = () => {
    const { isLoading, appError } = useSelector((state: AppStoreType) => state.app);
    const passRecoverySuccess = useSelector((state: AppStoreType) => state.forgot.passRecoverySuccess)
    return (
        <div style={{ height: '50px' }}>
            {isLoading && <div style={{ color: '#FF4500FF' }}>...Loading</div>}
            {appError && <div style={{ color: "red" }}>{appError}</div>}
            {passRecoverySuccess && <div style={{ color: "greenyellow", fontWeight: 'bold' }}>Success!</div>}
        </div>
    )
}

