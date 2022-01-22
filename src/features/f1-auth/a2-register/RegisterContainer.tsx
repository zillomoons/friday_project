import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { registerUser } from "../../../main/bll/reducers/auth-reducer";
import { AppStoreType } from "../../../main/bll/store/store";
import { PATH } from "../../../main/ui/routes/Routes";
import { Registration } from "./Registration";

export const RegisterContainer = () => {
  const dispatch = useDispatch();
  const authSuccess = useSelector(
    (state: AppStoreType) => state.auth.authSuccess
  );
  const onRegister = (email: string, pass: string) => {
    dispatch(registerUser(email, pass));
  };
  if (authSuccess) {
    return <Navigate to={PATH.LOGIN} />;
  }
  return <Registration onRegister={onRegister} />;
};
