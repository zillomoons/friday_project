import {Route, Routes} from "react-router-dom";
import {Profile} from "../../../features/f2-profile/Profile";
import {Test} from "../../../features/f0-test/Test";
import {Error404} from "../../../features/error404/Error404";
import React from "react";
import {ForgotContainer} from "../../../features/f1-auth/a3-forgot-pass/ForgotContainer";
import {SetPassContainer} from "../../../features/f1-auth/a4-new-pass/SetPassContainer";
import {CardsContainer} from "../../../features/f4-cards/CardsContainer";
import {RegisterContainer} from "../../../features/f1-auth/a2-register/RegisterContainer";
import { LoginContainer } from "../../../features/f1-auth/a1-login/loginContainer";
import { PacksList } from "../../../features/f3-packs/PacksList";

export const PATH = {
    PROFILE: '/profile',
    LOGIN: '/login',
    FORGOT: '/forgot',
    REGISTER: '/register',
    TEST: '/test',
    SET_PASS: '/set-new-password/:token',
    PACKS: '/packs',
    CARDS: '/cards',
    MAIN: '/'
}

export const RoutesComponent = () => {
    return (
        <>
            <Routes>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.FORGOT} element={<ForgotContainer/>}/>
                <Route path={PATH.REGISTER} element={<RegisterContainer/>}/>
                <Route path={PATH.LOGIN} element={<LoginContainer/>}/>
                <Route path={PATH.SET_PASS} element={<SetPassContainer/>}/>
                <Route path={PATH.TEST} element={<Test/>}/>
                <Route path={PATH.CARDS} element={<CardsContainer/>} />
                <Route path={PATH.MAIN} element={<PacksList/>} />
                <Route path='*' element={<Error404/>}/>
            </Routes>
        </>
    )
}