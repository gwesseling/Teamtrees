import React from 'react';
import styled from 'styled-components';
import astronaut from '_ASSETS/astronaut-sign.svg';

const AstronautImage = styled.img`
    max-width: 6rem;
    width: 100%;
    top: 10%;
    right: 30%;
    position: absolute;
    animation: float-3 7s ease-in-out infinite;

    @media screen and (max-width: 1500px) {
        right: 7%;
    }

    @media screen and (max-width: 768px) {
        max-width: 3rem;
        right: 3%;
        top: 5%;
    }
`;

/** 
 * Astronaut image
 */
export default function Astronaut() {
    return <AstronautImage src={astronaut} />
}