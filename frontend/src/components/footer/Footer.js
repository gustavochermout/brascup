import React from "react";
import styled from 'styled-components';

const StyledFooter = styled.footer`
    width: 100%; 
    bottom: 0px; 
    position: fixed; 
    background-color: #F8F9FA; 
    color: #808080; 
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export default function Footer() {
    return (
        <StyledFooter>
            <span>BrasCup | 2020</span>
        </StyledFooter>
    )
}