import React from 'react';
import styled from 'styled-components';
import cloud from '../assets/cloud1.svg';

const CloudImage = styled.img`
    position: absolute;
    max-width: 6rem;
    top: 36%;
    left: 33%;
`;

export default function Cloud() {
    return <CloudImage src={cloud} />
}