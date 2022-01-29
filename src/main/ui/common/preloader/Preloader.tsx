import loadImg from '../../../../assets/images/preloader.svg'
import s from "./Preloader.module.css"

export const Preloader = () => {
    return <div className={s.preloaderWrapper}>
        <img src={loadImg} alt="preloader"/>
    </div>
}
