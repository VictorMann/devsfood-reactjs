import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';

import { Container, Menu, PageBody } from './AppStyled';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

import PrivateRoute from './components/PrivateRoute';
import MenuItem from './components/MenuItem';
import Cart from './components/Cart';


export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem title="Loja" icon="/assets/store.png" link="/" />
                    <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders" />
                    <MenuItem title="Perfil" icon="/assets/profile.png" link="/profile" />
                </Menu>
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <Route path="/login">
                            <h1>Login</h1>
                        </Route>
                        <PrivateRoute path="/orders">
                            <h1>Pedidos</h1>
                        </PrivateRoute>
                        <PrivateRoute path="/profile">
                            <h1>Perfil</h1>
                        </PrivateRoute>
                        <PrivateRoute path="/tela2/:nome">
                            <Tela2Screen />
                        </PrivateRoute>
                    </Switch>
                </PageBody>
                <Cart />
                <ReactTooltip id="tip-top" place="top" effect="solid" />
                <ReactTooltip id="tip-right" place="right" effect="solid" />
            </Container>
        </BrowserRouter>
    );
}