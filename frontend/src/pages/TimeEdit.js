import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import api from '../services/api';
import { Line, Button, ButtonHover, Title, Footer, CancelButton, CancelButtonHover, Label, Input, Form } from '../components/Styles';

const Container = styled.div`
    width: 100%;
    max-width: 445px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    background: #FFF;
    border-radius: 4px;
    padding: 15px;
`

export default function TimeEdit() {
    const [nome, setNome] = useState('');
    const [tecnico, setTecnico] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        await api.post('/time', {
            nome,
            tecnico
        });

        setNome('');
        setTecnico('');
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Title>Time</Title>
                <Line />
                
                <Label>Nome</Label>
                <Input 
                    type="text" 
                    id="nome" 
                    placeholder="Nome do time"
                    required
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                
                <Label>Técnico</Label>
                <Input 
                    type="text" 
                    id="tecnico" 
                    placeholder="Quem vai conduzir as vitórias?"
                    value={tecnico}
                    onChange={e => setTecnico(e.target.value)}
                />
                
                <Line />
                <Footer>
                    <Link to="/times">
                        <CancelButtonHover>
                            <CancelButton>Voltar</CancelButton>
                        </CancelButtonHover>
                    </Link>
                    <ButtonHover>
                        <Button type="submit">Salvar</Button>
                    </ButtonHover>
                </Footer>
            </Form>
        </Container>
    )
}