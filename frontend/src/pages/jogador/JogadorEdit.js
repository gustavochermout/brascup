import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { ContainerEdit, Line, Button, ButtonHover, Title, Footer, CancelButton, CancelButtonHover, Label, Input, Form, Select } from '../../components/Styles';
import api from '../../services/api';

import * as TimeActions from '../../store/actions/Time';
import history from '../../history';

function JogadorEdit({ times, dispatch }) {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [timeId, setTimeId] = useState('');
    const { jogadorId } = useParams();
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        async function loadTimes() {
            if (times.length === 0){
                const response = await api.get('/time');
                dispatch(TimeActions.setTimes(response.data));
            }
        }

        async function setPageMode() {
            if (jogadorId) {
                setEditMode(true);

                const response = await api.get(`/jogador/${jogadorId}`);
                setNome(response.data.nome);
                setIdade(response.data.idade === 0 ? '' : response.data.idade);
                setTimeId(response.data.timeId);
            }
        }

        loadTimes();
        setPageMode();
    }, [dispatch, times, jogadorId]);

    async function postJogador() {
        await api.post('/jogador', {
            nome,
            idade: Number(idade),
            timeId: Number(timeId)
        });
    }

    async function putJogador() {
        await api.put(`/jogador/${jogadorId}`, {
            id: Number(jogadorId),
            nome,
            idade: Number(idade),
            timeId: Number(timeId)
        });
        
        history.push('/jogadores');
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (editMode)
            putJogador();
        else
            postJogador();

        setNome('');
        setIdade('');
        setTimeId('');
    }

    return (
        <ContainerEdit >
            <Form onSubmit={handleSubmit}>
                <Title>Jogador</Title>
                <Line />

                <Label>Nome</Label>
                <Input 
                    type="text"
                    id="nome"
                    placeholder="Nome do jogador"
                    required
                    value={nome}
                    onChange={e => setNome(e.target.value)}                
                />

                <Label>Idade</Label>
                <Input 
                    type="number"
                    id="idade"
                    placeholder="Idade do jogador"
                    value={idade}
                    onChange={e => setIdade(e.target.value)}
                    min="1"
                    max="99"
                />

                <Label>Time</Label>
                <Select 
                    id="time"
                    required
                    value={timeId}
                    onChange={e => setTimeId(e.target.value)}
                >
                    <option value="" defaultValue></option>
                    {times.map(time => (
                        <option key={time.id} value={time.id}>{time.nome}</option>
                    ))}
                </Select>

                <Line />
                <Footer>
                    <Link to="/jogadores">
                        <CancelButtonHover>
                            <CancelButton type="button">Voltar</CancelButton>
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

export default connect(state => ({ times: state.Time.times }))(JogadorEdit);