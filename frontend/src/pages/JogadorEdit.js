import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ContainerEdit, Line, Button, ButtonHover, Title, Footer, CancelButton, CancelButtonHover, Label, Input, Form } from '../components/Styles';

export default function JogadorEdit() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(null);

    return (
        <ContainerEdit>
            <Form>
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

                <Line />
                <Footer>
                    <Link to="/jogadores">
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