import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useBanner from './containerHook';
import SpaceShip from '../Spaceship';
import Cloud1 from '../Cloud1';
import Cloud2 from '../Cloud2';
import Astronaut from '../Astronaut';
import BannerContent from '../BannerContent';
import Disclaimer from '../Disclaimer';

import background from '../../assets/background-hero-scene-celebration.svg';
import patern from '../../assets/pattern-stars.png';

const BannerContainer = styled.div`
    height: 82.5vh;
    background: url(${background}) no-repeat center bottom,url(${patern}) repeat top left,linear-gradient(180deg,#141e32 0,#686263 33%,#9cafa2 55%,#cae2e1 100%);
    background-size: 100%,300px 301px,100%;
`;

const BannerCon = styled(Container)`
    height: 100%;
`;

const BannerRow = styled(Row)`
    height: 100%;
`;

export default function Banner() {
    const {getTrees} = useBanner();
    const trees = getTrees();

    return (
        <BannerContainer>
            <BannerCon>
                <BannerRow>
                    <Col className="mx-auto" lg={5}>
                        <BannerContent trees={trees} />
                    </Col>
                </BannerRow>
            </BannerCon>
            <SpaceShip />
            <Cloud1 />
            <Cloud2 />
            <Astronaut />
            <Disclaimer />
        </BannerContainer>
    );
}