import React, {useEffect} from "react";
import "./App.css";
import {Main} from "./Main";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "../bll/reducers/app-reducer";
import {AppStoreType} from "../bll/store/store";
import {Preloader} from "./common/preloader/Preloader";
import {ModalProvider} from "../../contexts";

function App() {
    const dispatch = useDispatch();
    const isInitialized = useSelector((state: AppStoreType) => state.app.isInitialized);
    useEffect(() => {
        dispatch(initializeApp());
    }, [dispatch]);

    if (!isInitialized) {
        return <Preloader/>
    }

    return (
        <ModalProvider>
            <div className="App">
                <Main/>
            </div>
        </ModalProvider>

    );
}

export default App;
