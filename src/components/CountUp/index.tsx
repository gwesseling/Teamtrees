import React from 'react';
import styled from 'styled-components';
import useCountUpAnimation from './containerHook';
import {toStringWithCommas} from '_LIBS/helpers';

type Props = {
    value: number,
}

const Title = styled.h1`
    color: white;
    line-height: .875;
    font-weight: 900;
    font-size: 3rem;
    margin: 1.25rem .75rem .5rem;
`;

/** 
 * Counup animation component.
 */
export default function CountUp({value}: Props) {
    const {count} = useCountUpAnimation(true, value);
    return (
        <Title>{toStringWithCommas(count)}</Title>
    );
}