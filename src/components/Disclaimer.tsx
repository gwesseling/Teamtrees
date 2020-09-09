import React from 'react';
import styled from 'styled-components';

const DisclaimerText = styled.p`
    position: absolute;
    bottom: 0;
    right: 15px;
    z-index: 1;
    font-size: 10px;
    color: rgba(0,0,0,.7);
`;

export default function Disclaimer() {
    return <DisclaimerText>
        * We do not own any of the content displayed on this website. All content is owned by the <a target="_new" href="https://www.arborday.org/">Arbor Day Foundation</a>.
    </DisclaimerText>
}