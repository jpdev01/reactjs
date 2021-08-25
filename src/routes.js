import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/routesPages/main/index';
import Enterprise from './components/routesPages/enterprise';
import Contact from './components/routesPages/contact';
import Menu from './components/Menu';
import MoviesList from './components/api/MoviesList';

//Switch = carregar apenas uma rota por vez
//Route = trabalhar com as rotas, gerenciar


function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}></Route>
            <Route path="/menu" component={Menu}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/enterprise" component={Enterprise}></Route>
            <Route path="/movies" component={MoviesList}></Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;