import {ForgotPass} from "./ForgotPass";
import {useState} from "react";

export const ForgotContainer =  () => {
    const [text, setText] = useState<string>('');
    const onInputChangeText = (value: string) => {
        setText(value);
    }
    const showAlert = () => {
        alert(text)
        setText('');
    }

    return <>
        <ForgotPass inputValue={text}
                    onChange={onInputChangeText}
                    onEnter={showAlert}
        />
    </>
}

