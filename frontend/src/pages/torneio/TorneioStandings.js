import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ContainerList, Title, Line } from '../../components/Styles';
import api from '../../services/api';

export default function TorneioStandings() {
    const { torneioId } = useParams();
    const [nome, setNome] = useState('');

    useEffect(() => {
        async function loadTorneio() {
            try {
                const response = await api.get(`/torneio/${torneioId}`);
                setNome(response.data.nome);
            } catch (error) {
                setNome('Não foi possível encontrar o torneio selecionado!');
            }    
        }

        loadTorneio();
    }, [torneioId]);

    return (
        <ContainerList>
            <Title>{nome}</Title>
            <Line />    
        </ContainerList>
    )   
}