import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import CountUp from './CountUp';

import logo from '../assets/logo.svg';
import counterStar from '../assets/counter-starburst-light.svg'
import counterUnderline from '../assets/counter-underline.svg';

const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background: radial-gradient(ellipse,rgba(20,30,50,.3) 0,rgba(20,30,50,0) 75%);
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    max-width: 30rem;
    width: 100%;
    margin: 0 auto 1rem;
`;

const CounterWrapper = styled.div`
    background: url(${counterStar});
    background-position: top center;
    background-repeat: no-repeat;
    padding: 2.25rem 2rem 1.25rem;
    background-size: 120px auto;
`;

const SubTitle = styled.p`
    letter-spacing: 2px;
    text-transform: uppercase!important;
    color: white;
    font-size: 1.5rem;
    margin-bottom: 0;
`;

const CounterUnderline = styled.img`
    max-width: 5.25rem;
    width: 100%;
    display: block;
    margin: .25rem auto 0;
`;

const BannerText = styled.p`
    font-size: 1.25rem;
    color: white;
`

type Props = {
    trees: number,
}

export default function BannerContent({trees}: Props) {

    return (
         <BannerContainer>
            <Logo src={logo} />
            <CounterWrapper>
                <CountUp value={trees} />
                <SubTitle>trees planted</SubTitle>
                <CounterUnderline src={counterUnderline} />
            </CounterWrapper>
            <BannerText>This website shows the current amount of trees planted by Arborday based on the projects listed on the Arborday project page*</BannerText>
            <div className="mt-2 mb-5">
                <Link link="https://teamtrees.org/">Donate to teamtrees</Link>
            </div>
        </BannerContainer>
    );
}