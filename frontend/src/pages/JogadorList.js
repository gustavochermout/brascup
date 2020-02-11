import React, { useState, useEffect } from 'react';

import List from '../components/List';
import api from '../services/api';

export default function JogadorList() {
    const [jogadores, setJogadores] = useState([]);

    useEffect(() => {
        async function loadJogadores() {
            const response = await api.get('/jogador');
            setJogadores(response.data);
        }

        loadJogadores();
    }, []);

    return (
        <List title="Jogadores" items={jogadores}/>
    )
}