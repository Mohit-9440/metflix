/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Header } from "../components";
import ROUTES from '../constants/routes'

export function HeaderContainer( {children} ) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="Metflix"/>
                <Header.Button to={ROUTES.SIGN_IN}>Sign In</Header.Button>
            </Header.Frame>
        </Header>
    );
}