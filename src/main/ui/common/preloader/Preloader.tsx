import loadImg from '../../../../assets/images/preloader.svg'

export const Preloader = () => {
    return <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={loadImg} alt="preloader"
            style={{}}
        />
    </div>
}