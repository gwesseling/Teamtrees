import React from 'react';
import styled from 'styled-components';
import cloud from '../assets/cloud2.svg';

const CloudImage = styled.img`
    position: absolute;
    max-width: 6rem;
    top: 36%;
    right: 33%;
`;

export default function Cloud() {
    return <CloudImage src={cloud} />
}