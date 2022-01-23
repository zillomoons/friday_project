import { Header } from "./header/Header";
import { RoutesComponent } from "./routes/Routes";
import s from "./Main.module.css";
import { useSelector } from "react-redux";
import { AppStoreType } from "../bll/store/store";

export const Main = () => {
  const isLoading = useSelector((state: AppStoreType) => state.app.isLoading);
  return (
    <>
      <Header />
      {isLoading && <div className={s.progressBar}></div>}
      <RoutesComponent />
    </>
  );
};
