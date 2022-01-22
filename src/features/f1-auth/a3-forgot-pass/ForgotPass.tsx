import s from "./ForgotPass.module.css";
import SuperInput from "../../../main/ui/common/superInput/SuperInput";
import SuperButton from "../../../main/ui/common/superButton/SuperButton";
import { SuperNavLink } from "../../../main/ui/common/superNavLink/SuperNavLink";
import { PATH } from "../../../main/ui/routes/Routes";

export const ForgotPass = ({
  inputValue,
  onChange,
  onEnter,
  isLoading,
}: ForgotPropsType) => {
  return (
    <div className={s.authWrapper}>
      <div className={s.forgotContainer}>
        <h3>Forgot your password?</h3>
        {/* <RequestStatusInfo /> */}
        <label htmlFor="">Email</label>
        <SuperInput
          value={inputValue}
          onEnter={onEnter}
          disabled={isLoading}
          onChangeText={onChange}
        />
        <label>
          Enter your email address and we will send you further instructions
        </label>
        <SuperButton disabled={isLoading} onClick={onEnter}>
          Send
        </SuperButton>
        <SuperNavLink text="login" url={PATH.LOGIN} />
      </div>
    </div>
  );
};
type ForgotPropsType = {
  inputValue: string;
  onChange: (value: string) => void;
  onEnter: () => void;
  isLoading: boolean;
};


