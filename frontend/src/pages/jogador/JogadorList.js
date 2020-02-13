import React, { useState, useEffect } from 'react';

import List from '../../components/list/List';
import api from '../../services/api';

export default function JogadorList() {
    const [jogadores, setJogadores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadJogadores() {
            const response = await api.get('/jogador');
            setJogadores(response.data);
            setLoading(false);
        }

        loadJogadores();
    }, []);

    return (
        <List 
            linkToNew="/jogadores-edicao" 
            title="Jogadores" 
            items={jogadores} 
            viewIcon={false}
            loading={loading}
            entity="jogador"
            setItems={setJogadores}
        />
    )
}