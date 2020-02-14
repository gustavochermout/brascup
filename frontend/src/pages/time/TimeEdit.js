import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import api from '../../services/api';
import { ContainerEdit, Line, Button, ButtonHover, Title, Footer, CancelButton, CancelButtonHover, Label, Input, Form } from '../../components/Styles';

import * as TimeActions from '../../store/actions/Time';
import history from '../../history'

function TimeEdit({ times, dispatch }) {
    const [nome, setNome] = useState('');
    const [tecnico, setTecnico] = useState('');
    const { timeId } = useParams();
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        async function setPageMode() {
            if (timeId) {
                setEditMode(true);

                const response = await api.get(`/time/${timeId}`);
                setNome(response.data.nome);
                setTecnico(response.data.tecnico);
            }
        }

        setPageMode();
    }, [timeId]);

    async function handleSubmit(e) {
        e.preventDefault();

        if (!editMode) {
            const response = await api.post('/time', {
                nome,
                tecnico
            });

            const newTimes = [...times, response.data];
            dispatch(TimeActions.setTimes(newTimes));
        }else {
            await api.put(`/time/${timeId}`, {
                id: Number(timeId),
                nome,
                tecnico
            });

            const newTimes = times.map(time => {
                if (time.id === Number(timeId)){
                    time.nome = nome;
                    time.tecnico = tecnico;
                }

                return time;
            });
            dispatch(TimeActions.setTimes(newTimes));

            history.push('/times');
        }

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

export default connect(state => ({ times: state.Time.times }))(TimeEdit);