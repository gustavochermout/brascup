import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { ContainerEdit, Line, Button, ButtonHover, Title, Footer, CancelButton, CancelButtonHover, Label, Input, Form } from '../../components/Styles';

export default function TorneioEdit() {
    const [nome, setNome] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        await api.post('/torneio', {
            nome
        });

        setNome('');
    }

    return (
        <ContainerEdit>
            <Form onSubmit={handleSubmit}>
                <Title>Torneio</Title>
                <Line />

                <Label>Nome</Label>
                <Input
                    type="text"
                    id="nome"
                    placeholder="Nome do torneio"
                    required
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                
                <Line />
                <Footer>
                    <Link to="/">
                        <CancelButtonHover>
                            <CancelButton>Voltar</CancelButton>
                        </CancelButtonHover>
                    </Link>
                    <ButtonHover>
                        <Button type="submit">Próximo</Button>
                    </ButtonHover>
                </Footer>
            </Form>
        </ContainerEdit>
    )
}