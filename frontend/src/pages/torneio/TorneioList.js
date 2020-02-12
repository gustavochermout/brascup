import React, { useState, useEffect } from 'react';

import List from '../../components/list/List';
import api from '../../services/api';

export default function TorneioList() {
    const [torneios, setTorneios] = useState([]);

    useEffect(() => {
        async function loadTorneios() {
            const response = await api.get('/torneio');
            setTorneios(response.data);
        }

        loadTorneios();
    }, []);

    return (
        <List linkToNew="/torneios-edicao" title="Torneios" items={torneios}/>
    )
}