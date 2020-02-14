import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ContainerEdit, Form, Title, Line, Button, ButtonHover, CancelButton, CancelButtonHover, Footer, Label, Select } from '../../components/Styles';
import api from '../../services/api';

import * as TimeActions from '../../store/actions/Time';

function Inscricao({ times, dispatch }) {
    const { torneioId } = useParams();
    const [timeId, setTimeId] = useState('');

    useEffect(() => {
        async function loadTimes() {
            if (times.length === 0){
                const response = await api.get('/time');
                dispatch(TimeActions.setTimes(response.data));
            }
        }

        loadTimes();
    }, [dispatch, times]);

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.get(`/inscricao/torneio-time/${torneioId}/${timeId}`);

        if (!response.data.length){
            await api.post('/inscricao', {
                torneioId: Number(torneioId),
                timeId: Number(timeId)
            });

            setTimeId('');
        }else{
            alert("O time selecionado já está inscrito no torneio!");
        }
    }

    return (
        <ContainerEdit onSubmit={handleSubmit}>
            <Form>
                <Title>Inscrição de times no torneio</Title>
                <Line />

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
                    <Link to={`/torneios-classificacao/${torneioId}`}>
                        <CancelButtonHover>
                            <CancelButton type="button">Voltar</CancelButton>
                        </CancelButtonHover>
                    </Link>
                    <ButtonHover>
                        <Button type="submit">Inscrever</Button>
                    </ButtonHover>
                </Footer>
            </Form>
        </ContainerEdit>
    )
}

export default connect(state => ({ times: state.Time.times }))(Inscricao);