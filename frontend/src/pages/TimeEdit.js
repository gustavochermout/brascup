import React from 'react';
import styled from 'styled-components';

import { Line, Button, ButtonHover, Title, Footer, CancelButton, CancelButtonHover, Label, Input } from '../components/Styles';

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
    return (
        <Container>
            <Title>Time</Title>
            <Line />
            
            <Label>Nome</Label>
            <Input 
                type="text" 
                id="nome" 
                placeholder="Nome do time"
            />
            
            <Label>Técnico</Label>
            <Input 
                type="text" 
                id="tecnico" 
                placeholder="Quem vai conduzir as vitórias?"
            />
            
            <Line />
            <Footer>
                <CancelButtonHover>
                    <CancelButton>Cancelar</CancelButton>
                </CancelButtonHover>
                <ButtonHover>
                    <Button>Salvar</Button>
                </ButtonHover>
            </Footer>
        </Container>
    )
}