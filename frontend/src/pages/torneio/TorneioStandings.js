import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

import { ContainerList, Title, Line, Button, ButtonHover, CancelButton, CancelButtonHover, Footer, Message } from '../../components/Styles';
import api from '../../services/api';
import StandingsDescription from '../../components/standings/StandingsDescription';
import StandingsItem from '../../components/standings/StandingsItem';

const ContainerTimes = styled.div`
    width: 100%;
    height: 320px;
    overflow-y: auto;
`

export default function TorneioStandings() {
    const { torneioId } = useParams();
    const [nome, setNome] = useState('');
    const [classificacao, setClassificacao] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadTorneio() {
            try {
                const response = await api.get(`/torneio/${torneioId}`);
                setNome(response.data.nome);
            } catch (error) {
                setNome('Não foi possível encontrar o torneio selecionado!');
            }    
        }

        async function loadClassificacao() {
            const response = await api.get(`/torneio/classificacao/${torneioId}`);
            setClassificacao(response.data);
            setLoading(false);
        }

        loadTorneio();
        loadClassificacao();
    }, [torneioId]);

    return (
        <ContainerList>
            <Title>{nome}</Title>
            <Line />
            <ContainerTimes>
                {!loading ?
                    classificacao.length > 0 ?   
                        <ListGroup variant="flush">
                            <StandingsDescription />
                            {classificacao.map(time => <StandingsItem key={time.id} item={time}/>)}
                        </ListGroup> : 
                    <Message>Inscreva times no torneio para começarmos! :)</Message> : 
                <Message>Carregando...</Message>
                }
            </ContainerTimes>
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