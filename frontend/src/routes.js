import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import TorneioEdit from './pages/torneio/TorneioEdit';
import TorneioList from './pages/torneio/TorneioList';
import TimeEdit from './pages/time/TimeEdit';
import TimeList from './pages/time/TimeList';
import JogadorEdit from './pages/jogador/JogadorEdit';
import JogadorList from './pages/jogador/JogadorList';
import Header from './components/header/Header';

export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={TorneioList}/>
                <Route path="/torneios-edicao" exact component={TorneioEdit}/>
                <Route path="/times" exact component={TimeList}/>
                <Route path="/times-edicao" exact component={TimeEdit}/>
                <Route path="/jogadores" exact component={JogadorList}/>
                <Route path="/jogadores-edicao" exact component={JogadorEdit}/>
            </Switch>
        </BrowserRouter>
    )
}