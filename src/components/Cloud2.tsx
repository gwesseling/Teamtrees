import React from 'react';
import styled from 'styled-components';
import cloud from '_ASSETS/cloud2.svg';

const CloudImage = styled.img`
    position: absolute;
    max-width: 6rem;
    top: 36%;
    right: 33%;

    @media screen and (max-width: 1200px) {
        right: 13%;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

/** 
 * Second cloud image.
 */
export default function Cloud() {
    return <CloudImage src={cloud} />
}