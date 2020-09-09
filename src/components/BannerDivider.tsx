import React from 'react';
import styled from 'styled-components';
import treeBackground from '../assets/tree-background-full.png';
import divider from '../assets/divider-right-condensed.svg';

const Divider = styled.div`
    position: relative;
    background-color: #89b636;
    margin-top: -4px;
    padding: 0 0 2rem;
    background-image: url(${treeBackground});
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100%;
    height: 17.5vh;
`;

const DividerImage = styled.img`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
`;


export default function BannerGreen() {
    return (
        <Divider>
            <DividerImage src={divider} />
        </Divider>
    );
}