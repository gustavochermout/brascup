import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Torneio from './pages/Torneio';
import Time from './pages/Time';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Torneio}/>
                <Route path="/times" exact component={Time}/>
            </Switch>
        </BrowserRouter>
    )
}