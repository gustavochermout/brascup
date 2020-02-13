import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { ContainerList, Title, Line, Button, ButtonHover, CancelButton, CancelButtonHover, Footer } from '../../components/Styles';
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
            <Line />
            <Footer>
                <Link to="/">
                    <CancelButtonHover>
                        <CancelButton type="button">Voltar</CancelButton>
                    </CancelButtonHover>
                </Link>
                <Link to={`/jogo/${torneioId}`}>
                    <ButtonHover>
                        <Button type="button">Partida</Button>
                    </ButtonHover>
                </Link>
                <Link to={`/inscricao/${torneioId}`}>
                    <ButtonHover>
                        <Button type="button">Inscrição</Button>
                    </ButtonHover>
                </Link>
            </Footer> 
        </ContainerList>
    )   
}