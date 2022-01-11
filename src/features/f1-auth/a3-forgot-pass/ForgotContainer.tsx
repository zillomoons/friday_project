import {ForgotPass} from "./ForgotPass";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../main/bll/store/store";
import {recoverPass} from "../../../main/bll/reducers/forgot-reducer";

export const ForgotContainer = () => {
    const {isLoading, appError} = useSelector((state: AppStoreType) => state.app);
    const dispatch = useDispatch();
    const [text, setText] = useState<string>('');
    const onInputChangeText = (value: string) => {
        setText(value);
    }

    const onRecoverPass = () => {
        dispatch(recoverPass(text))
        setText('');
    }

    return (
        <>
            <ForgotPass inputValue={text}
                        error={appError}
                        isLoading={isLoading}
                        onChange={onInputChangeText}
                        onEnter={onRecoverPass}
            />
        </>
    )
}

