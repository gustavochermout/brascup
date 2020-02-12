import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import TorneioList from './pages/TorneioList';
import TimeEdit from './pages/TimeEdit';
import TimeList from './pages/TimeList';
import JogadorEdit from './pages/JogadorEdit';
import JogadorList from './pages/JogadorList';
import Header from './components/Header';

export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={TorneioList}/>
                <Route path="/times" exact component={TimeList}/>
                <Route path="/times-edicao" exact component={TimeEdit}/>
                <Route path="/jogadores" exact component={JogadorList}/>
                <Route path="/jogadores-edicao" exact component={JogadorEdit}/>
            </Switch>
        </BrowserRouter>
    )
}