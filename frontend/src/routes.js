import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Torneio from './pages/Torneio';
import Time from './pages/Time';
import Jogador from './pages/Jogador';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Torneio}/>
                <Route path="/times" exact component={Time}/>
                <Route path="/jogadores" exact component={Jogador}/>
            </Switch>
        </BrowserRouter>
    )
}