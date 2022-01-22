import s from "./login.module.css";
import SuperInput from "../../../main/ui/common/superInput/SuperInput";
import SuperButton from "../../../main/ui/common/superButton/SuperButton";
import { useState } from "react";
import SuperCheckbox from "../../../main/ui/common/supperCheckbox/SuperCheckbox";
import { SuperNavLink } from "../../../main/ui/common/superNavLink/SuperNavLink";
import { PATH } from "../../../main/ui/routes/Routes";

export const Login = ({ onLogin, isLoading }: PropsType) => {
  const [email, setEmail] = useState("domingo@mail.ru");
  const [pass, setPass] = useState("crudsfamily");
  const [rememberMe, setRememberMe] = useState(false);
  const handleLogin = () => onLogin(email, pass, rememberMe);

  return (
    <div className={s.authWrapper}>
      <div className={s.loginContainer}>
        <h3>Sign in</h3>
        <label htmlFor="">Email</label>
        <SuperInput
          disabled={isLoading}
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <label htmlFor="">Password</label>
        <SuperInput
          disabled={isLoading}
          value={pass}
          onChange={(e) => setPass(e.currentTarget.value)}
        />
        <div className={s.checkBox}>
          <SuperCheckbox /> remember me
        </div>
        <SuperNavLink text="Forgot password" url={PATH.FORGOT} />
        <SuperButton disabled={isLoading} onClick={handleLogin}>
          LOGIN
        </SuperButton>
        <div className={s.signUp}>Don't have an account?</div>
        <SuperNavLink text="Sing up" url={PATH.REGISTER} />
      </div>
    </div>
  );
};
type PropsType = {
  onLogin: (email: string, pass: string, rememberMe: boolean) => void;
  isLoading: boolean;
};
