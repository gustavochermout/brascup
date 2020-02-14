import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import history from '../../history';
import api from '../../services/api';
import { ContainerEdit, Line, Button, ButtonHover, Title, Footer, CancelButton, CancelButtonHover, Label, Input, Form } from '../../components/Styles';

export default function TorneioEdit() {
    const [nome, setNome] = useState('');
    const { torneioId } = useParams();
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        async function setPageMode() {
            if (torneioId){
                setEditMode(true);
                
                const response = await api.get(`/torneio/${torneioId}`);
                setNome(response.data.nome);
            }
        }

        setPageMode();
    }, [torneioId]);

    async function handleSubmit(e) {
        e.preventDefault();

        if (!editMode){
            const response = await api.post('/torneio', {
                nome
            });

            history.push(`/torneios-classificacao/${response.data.id}`);
        }else{
            await api.put(`/torneio/${torneioId}`, {
                id: Number(torneioId),
                nome
            });

            history.push('/');
        }
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
                            <CancelButton type="button">Voltar</CancelButton>
                        </CancelButtonHover>
                    </Link>
                    <ButtonHover>
                        <Button type="submit">{editMode ? "Salvar" : "Próximo"}</Button>
                    </ButtonHover>
                </Footer>
            </Form>
        </ContainerEdit>
    )
}