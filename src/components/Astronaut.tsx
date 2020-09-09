import React from 'react';
import styled from 'styled-components';
import astronaut from '../assets/astronaut-sign.svg';

const AstronautImage = styled.img`
    max-width: 6rem;
    width: 100%;
    top: 10%;
    right: 32%;
    position: absolute;
    animation: float-3 7s ease-in-out infinite;
`;

export default function Astronaut() {
    return <AstronautImage src={astronaut} />
}