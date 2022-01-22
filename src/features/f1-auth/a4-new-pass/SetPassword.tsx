import SuperInputText from "../../../main/ui/common/superInput/SuperInput";
import SuperButton from "../../../main/ui/common/superButton/SuperButton";
import { SuperNavLink } from "../../../main/ui/common/superNavLink/SuperNavLink";
import { PATH } from "../../../main/ui/routes/Routes";
import s from "./SetPassword.module.css";

export const SetPassword = (props: SetPassPropsType) => {
  const { inputValue, onChange1, onChange2, onSubmit, isLoading } = props;

  return (
    <div className={s.authWrapper}>
      <div className={s.formContainer}>
        <h3>Create new password</h3>
        <label htmlFor="">Password</label>
        <SuperInputText
          value={inputValue[0]}
          disabled={isLoading}
          onChangeText={onChange1}
        />
        <label htmlFor="">Password</label>
        <SuperInputText
          value={inputValue[1]}
          disabled={isLoading}
          onChangeText={onChange2}
        />
        <SuperButton disabled={isLoading} onClick={onSubmit}>
          Create new password
        </SuperButton>
        <SuperNavLink text="login" url={PATH.LOGIN} />
      </div>
    </div>
  );
};
type SetPassPropsType = {
  inputValue: string[];
  isLoading: boolean;
  onChange1: (value: string) => void;
  onChange2: (value: string) => void;
  onSubmit: () => void;
};
