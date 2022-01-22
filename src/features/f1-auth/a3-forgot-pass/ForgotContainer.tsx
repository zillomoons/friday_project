import {ForgotPass} from "./ForgotPass";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../main/bll/store/store";
import { forgotPass } from "../../../main/bll/reducers/auth-reducer";

export const ForgotContainer = () => {
    const isLoading = useSelector((state: AppStoreType) => state.app.isLoading);
    const dispatch = useDispatch();
    const [text, setText] = useState<string>('');
    const onInputChangeText = (value: string) => {
        setText(value);
    }

    const onRecoverPass = () => {
        dispatch(forgotPass(text))
        setText('');
    }

    return (
        <>
            <ForgotPass inputValue={text}
                        isLoading={isLoading}
                        onChange={onInputChangeText}
                        onEnter={onRecoverPass}
            />
        </>
    )
}

