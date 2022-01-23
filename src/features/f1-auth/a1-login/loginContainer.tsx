import s from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../../../main/bll/store/store";
import { Navigate } from "react-router-dom";
import { PATH } from "../../../main/ui/routes/Routes";
import { Login } from "./Login";
import { login } from "../../../main/bll/reducers/auth-reducer";

export const LoginContainer = () => {
  const isLoggedIn = useSelector(
    (state: AppStoreType) => state.auth.isLoggedIn
  );
  const isLoading = useSelector((state: AppStoreType) => state.app.isLoading);

  const dispatch = useDispatch();

  const onLogin = (email: string, pass: string, rememberMe: boolean) => {
    dispatch(login(email, pass, rememberMe));
  };
  if (isLoggedIn) {
    return <Navigate to={PATH.PROFILE} />;
  }
  return (
    <>
      <Login onLogin={onLogin} isLoading={isLoading} />
    </>
  );
};
