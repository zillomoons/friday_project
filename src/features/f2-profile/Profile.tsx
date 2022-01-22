import {useDispatch, useSelector} from "react-redux";
import { logout } from "../../main/bll/reducers/auth-reducer";
import {AppStoreType} from "../../main/bll/store/store";
import SuperButton from "../../main/ui/common/superButton/SuperButton";
import {Navigate} from "react-router-dom";
import {PATH} from "../../main/ui/routes/Routes";
import s from "./Profile.module.css"

export const Profile = () => {
    const dispatch = useDispatch();
    const {name, email} = useSelector((state: AppStoreType) => state.profile)
    const {isLoggedIn} = useSelector((state: AppStoreType) => state.auth)
    const onLogout = () => {
        dispatch(logout())
    }
    if(!isLoggedIn){
        return <Navigate to={PATH.LOGIN} />
    }
    return (
        <div className={s.authWrapper}>
            <div className={s.profileContainer}>
                <h3>Profile</h3>
                <div>
                    <b>Name: </b> {name}
                </div>
                <div>
                    <b>Email: </b> {email}
                </div>
                <SuperButton onClick={onLogout}>LOGOUT</SuperButton>
            </div>
        </div>
       

    )
}