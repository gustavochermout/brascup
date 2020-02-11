import styled from 'styled-components';

export const Title = styled.p`
    font-size: 20px;
    height: 10px;
`

export const Line = styled.hr`
    border-top: 1px solid #B0B0B0;
`

export const Button = styled.button`
    border: 0;
    border-radius: 2px;
    width: 200px;
    height: 42px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: bold;
    background: #30A24A;
    color: #FFF;
    cursor: pointer;
    margin-left: 15px;
`

export const ButtonHover = styled.div`
    &:hover ${Button} {
        background: #68C16F;
    }
`

export const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

export const CancelButton = styled.button`
    border: 0;
    border-radius: 2px;
    width: 200px;
    height: 42px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: bold;
    background: #808080;
    color: #FFF;
    cursor: pointer;
`

export const CancelButtonHover = styled.div`
    &:hover ${CancelButton} {
        background: #999999;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
    font-size: 15px;
    color: #444;
    font-weight: bold;
    margin-bottom: 8px;
`

export const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: 2px;
    height: 40px;
    padding: 0 15px;
    font-size: 15px;
    margin-bottom: 10px;
`

export const ContainerList = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    background: #FFF;
    border-radius: 4px;
    padding: 15px;
`

export const ContainerEdit = styled.div`
    width: 100%;
    max-width: 445px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    background: #FFF;
    border-radius: 4px;
    padding: 15px;
`

export const Select = styled.select`
    border: 1px solid #ddd;
    border-radius: 2px;
    height: 40px;
    padding: 0 15px;
    font-size: 15px;
    margin-bottom: 10px;
`