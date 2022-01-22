import { useState } from "react";
import SuperButton from "../../../main/ui/common/superButton/SuperButton";
import SuperInputText from "../../../main/ui/common/superInput/SuperInput";
import s from "./Registration.module.css";

export const Registration = ({ onRegister }: PropsType) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = () => {
    onRegister(email, pass);
    setEmail("");
    setPass("");
  };
  return (
    <div className={s.authWrapper}>
      <div className={s.registerForm}>
        <h3>Sign up</h3>
        <label>Email</label>
        <SuperInputText
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <label>Password</label>
        <SuperInputText
          value={pass}
          onChange={(e) => setPass(e.currentTarget.value)}
        />
        <SuperButton onClick={handleSubmit}>Register</SuperButton>
      </div>
    </div>
  );
};

type PropsType = {
  onRegister: (email: string, pass: string) => void;
};
