import { NavLink } from "react-router-dom";
import './Header.css'
import { PATH } from "../routes/Routes";
import { MdPersonOutline } from 'react-icons/md'
import { GiCardRandom } from 'react-icons/gi'

export const Header = () => {
    return (
        <div className="header">
            <div className="logo">It-incubator</div>
            <nav className="nav">
                <NavLink to={PATH.MAIN}>
                    <i><GiCardRandom /> </i>
                    Packs list
                </NavLink>
                <NavLink to={PATH.PROFILE}>
                    <i><MdPersonOutline /></i>
                    Profile
                </NavLink>
            </nav>
        </div>

    )
}