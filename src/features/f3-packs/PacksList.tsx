import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"
import { AppStoreType } from "../../main/bll/store/store";
import { PATH } from "../../main/ui/routes/Routes";
import { PacksContainer } from "./Packs/PacksContainer";
import { PacksSidebar } from "./PacksSidebar/PacksSidebar";
import s from "./PacksList.module.css"

export const PacksList = () => {
  const isLoggedIn = useSelector((state: AppStoreType) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={PATH.LOGIN} />;
  }
  return (
    <div className={s.packsListWrapper}>
      <PacksSidebar />
      <PacksContainer />
    </div>
  )
}

