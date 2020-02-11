import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Torneio from './pages/Torneio';
import TimeList from './pages/TimeList';
import JogadorList from './pages/JogadorList';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Torneio}/>
                <Route path="/times" exact component={TimeList}/>
                <Route path="/jogadores" exact component={JogadorList}/>
            </Switch>
        </BrowserRouter>
    )
}