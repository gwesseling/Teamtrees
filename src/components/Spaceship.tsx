import React from 'react';
import styled from 'styled-components';
import spaceship from '_ASSETS/spaceship.svg';

const Ship = styled.img`
    position: absolute;
    max-width: 2.375rem;
    width: 100%;
    top: 7%;
    left: 33%;

    @media screen and (max-width: 1500px) {
        left: 10%;
    }

    @media screen and (max-width: 768px) {
        left: 3%;
        top: 3%;
    }
`;

/** 
 * Spaceship image. 
 */
export default function Spaceship() {
    return <Ship src={spaceship} />
}