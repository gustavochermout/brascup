import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../services/api';
import { ContainerEdit, Line, Button, ButtonHover, Title, Footer, CancelButton, CancelButtonHover, Label, Input, Form } from '../components/Styles';

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
        <ContainerEdit>
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
        </ContainerEdit>
    )
}