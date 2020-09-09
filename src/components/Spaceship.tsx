import React from 'react';
import styled from 'styled-components';
import spaceship from '../assets/spaceship.svg';

const Ship = styled.img`
    position: absolute;
    max-width: 2.375rem;
    width: 100%;
    top: 7%;
    left: 33%;
`;

export default function Spaceship() {
    return <Ship src={spaceship} />
}