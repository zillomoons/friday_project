import SuperButton from "../../../main/ui/common/superButton/SuperButton"
import SuperInputText from "../../../main/ui/common/superInput/SuperInput"
import s from "./Registration.module.css";

export const Registration = () => {
    return (
        <div className={s.registerForm}>
            <h3>Registration</h3>
            <SuperInputText />
            <SuperInputText />
            <SuperButton>Submit</SuperButton>
        </div>
    ) 
    
}