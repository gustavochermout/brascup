import React, { useState, useEffect } from 'react';

import List from '../../components/list/List';
import api from '../../services/api';

export default function TorneioList() {
    const [torneios, setTorneios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadTorneios() {
            const response = await api.get('/torneio');
            setTorneios(response.data);
            setLoading(false);
        }

        loadTorneios();
    }, []);

    return (
        <List 
            linkToNew="/torneios-edicao" 
            title="Torneios" 
            items={torneios} 
            viewIcon={true}
            loading={loading}
        />
    )
}