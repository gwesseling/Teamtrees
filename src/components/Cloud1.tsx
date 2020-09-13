import React from 'react';
import styled from 'styled-components';
import cloud from '_ASSETS/cloud1.svg';

const CloudImage = styled.img`
    position: absolute;
    max-width: 6rem;
    top: 36%;
    left: 33%;

    @media screen and (max-width: 1200px) {
        left: 13%;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

/** 
 * Cloud image.
 */
export default function Cloud() {
    return <CloudImage src={cloud} />
}