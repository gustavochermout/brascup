import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import TorneioEdit from './pages/torneio/TorneioEdit';
import TorneioList from './pages/torneio/TorneioList';
import TorneioStandings from './pages/torneio/TorneioStandings';
import TimeEdit from './pages/time/TimeEdit';
import TimeList from './pages/time/TimeList';
import JogadorEdit from './pages/jogador/JogadorEdit';
import JogadorList from './pages/jogador/JogadorList';
import Inscricao from './pages/inscricao/Inscricao';
import Jogo from './pages/jogo/Jogo';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import history from './history';

export default function Routes() {
    return (
        <Router history={history}>
            <Header />
            <Switch>
                <Route path="/" exact component={TorneioList}/>
                <Route path="/torneios-edicao" exact component={TorneioEdit}/>
                <Route path="/torneios-edicao/:torneioId" exact component={TorneioEdit}/>
                <Route path="/torneios-classificacao/:torneioId" exact component={TorneioStandings}/>
                <Route path="/times" exact component={TimeList}/>
                <Route path="/times-edicao" exact component={TimeEdit}/>
                <Route path="/times-edicao/:timeId" exact component={TimeEdit}/>
                <Route path="/jogadores" exact component={JogadorList}/>
                <Route path="/jogadores-edicao" exact component={JogadorEdit}/>
                <Route path="/jogadores-edicao/:jogadorId" exact component={JogadorEdit}/>
                <Route path="/inscricao/:torneioId" exact component={Inscricao}/>
                <Route path="/jogo/:torneioId" exact component={Jogo}/>
            </Switch>
            <Footer />
        </Router>
    )
}