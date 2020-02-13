import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import { ContainerList, Form, Title, Line, Button, ButtonHover, CancelButton, CancelButtonHover, Footer, Label, Select, Input } from '../../components/Styles';

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

export default function Jogo() {
    const { torneioId } = useParams();

    return (
        <ContainerList>
            <Form>
                <Title>Partida</Title>
                <Line />
                
                <ContainerTimes>
                    <ContainerSelectTimeCasa>
                        <Label>Time da casa</Label>
                        <Select></Select>
                    </ContainerSelectTimeCasa>
                    <ContainerInput>
                        <Input></Input>
                    </ContainerInput>
                
                    <ContainerVersus>
                        <Label>X</Label>
                    </ContainerVersus>

                    <ContainerInput>
                        <Input></Input>
                    </ContainerInput>
                    <ContainerSelectTimeVisitante>
                        <ContainerLabelVisitante>
                            <Label>Time visitante</Label>
                        </ContainerLabelVisitante>
                        <Select></Select>
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