import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import { ContainerList, Form, Title, Line, Button, ButtonHover, CancelButton, CancelButtonHover, Footer, Label, Select } from '../../components/Styles';
import api from '../../services/api';

const ContainerTimes = styled.div`
    width: 580px;
    height: 75px;
    display: flex;
    flex-direction: row;
    color: #000;
`

const ContainerSelectTimeCasa = styled.div`
    width: 190px;
    height: 100px;
    display: flex;
    flex-direction: column;
    margin-right: 5px;
`

const ContainerSelectTimeVisitante = styled.div`
    width: 190px;
    height: 100px;
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    align: right;
`

const ContainerInput = styled.div`
    width: 65px;
    height: 100px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`

const ContainerVersus = styled.div`
    width: 50px;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 3px;
`

const ContainerLabelVisitante = styled.p`
    width: 100%;
    height: 14px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: 2px;
    height: 40px;
    padding: 0 9px;
    font-size: 15px;
    margin-bottom: 10px;
`

export default function Jogo() {
    const { torneioId } = useParams();
    const [times, setTimes] = useState([]);
    const [timeCasaId, setTimeCasaId] = useState('');
    const [golsTimeCasa, setGolsTimeCasa] = useState('');
    const [timeVisitanteId, setTimeVisitanteId] = useState('');
    const [golsTimeVisitante, setGolsTimeVisitante] = useState('');

    useEffect(() => {
        async function loadTimesByTorneioId() {
            const response = await api.get(`/time/torneio/${torneioId}`);
            setTimes(response.data);
        }

        loadTimesByTorneioId();
    }, [torneioId]);

    function getPointsTimeCasa(){
        if (Number(golsTimeCasa) > Number(golsTimeVisitante))
            return 3;

        if (Number(golsTimeCasa) < Number(golsTimeVisitante))
            return 0;

        return 1;
    }

    
    function getPointsTimeVisitante(){
        if (Number(golsTimeVisitante) > Number(golsTimeCasa))
            return 3;

        if (Number(golsTimeVisitante) < Number(golsTimeCasa))
            return 0;

        return 1;
    }

    async function handleSubmit(e) {
        e.preventDefault();

        api.post("/jogo", {
            torneioId: Number(torneioId),
            timeCasaId: Number(timeCasaId),
            timeVisitanteId: Number(timeVisitanteId),
            golsTimeCasa: Number(golsTimeCasa),
            golsTimeVisitante: Number(golsTimeVisitante),
            pontuacaoTimeCasa: getPointsTimeCasa(),
            pontuacaoTimeVisitante: getPointsTimeVisitante() 
        });

        setTimeCasaId('');
        setGolsTimeCasa('');
        setTimeVisitanteId('');
        setGolsTimeVisitante('');
    }

    return (
        <ContainerList>
            <Form onSubmit={handleSubmit}>
                <Title>Partida</Title>
                <Line />
                
                <ContainerTimes>
                    <ContainerSelectTimeCasa>
                        <Label>Time da casa</Label>
                        <Select 
                            id="time-casa"
                            required
                            value={timeCasaId}
                            onChange={e => setTimeCasaId(e.target.value)}
                        >
                            <option value="" defaultValue></option>
                            {times.map(time => (
                                <option key={time.id} value={time.id}>{time.nome}</option>
                            ))}
                        </Select>
                    </ContainerSelectTimeCasa>
                    <ContainerInput>
                        <Input 
                            type="number"
                            id="gols-time-casa"
                            placeholder="Gols"
                            required
                            value={golsTimeCasa}
                            onChange={e => setGolsTimeCasa(e.target.value)}
                        />
                    </ContainerInput>
                
                    <ContainerVersus>
                        <Label>X</Label>
                    </ContainerVersus>

                    <ContainerInput>
                        <Input 
                            type="number"
                            id="gols-time-visitante"
                            placeholder="Gols"
                            required
                            value={golsTimeVisitante}
                            onChange={e => setGolsTimeVisitante(e.target.value)}
                        />
                    </ContainerInput>
                    <ContainerSelectTimeVisitante>
                        <ContainerLabelVisitante>
                            <Label>Time visitante</Label>
                        </ContainerLabelVisitante>
                        <Select 
                            id="time-visitante"
                            required
                            value={timeVisitanteId}
                            onChange={e => setTimeVisitanteId(e.target.value)}
                        >
                            <option value="" defaultValue></option>
                            {times.map(time => (
                                <option key={time.id} value={time.id}>{time.nome}</option>
                            ))}
                        </Select>
                    </ContainerSelectTimeVisitante>
                </ContainerTimes>

                <Line />
                <Footer>
                    <Link to={`/torneios-classificacao/${torneioId}`}>
                        <CancelButtonHover>
                            <CancelButton type="button">Voltar</CancelButton>
                        </CancelButtonHover>
                    </Link>
                    <ButtonHover>
                        <Button type="submit">Salvar</Button>
                    </ButtonHover>
                </Footer>
            </Form>
        </ContainerList>
    )
};