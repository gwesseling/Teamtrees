import React from 'react';
import styled from 'styled-components';
import Link from '_COMPONENTS/Link';
import CountUp from '_COMPONENTS/CountUp';

import logo from '_ASSETS/logo.svg';
import counterStar from '_ASSETS/counter-starburst-light.svg'
import counterUnderline from '_ASSETS/counter-underline.svg';

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

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Plus = styled.p`
    color: white;
    margin-top: 1.25rem;
    margin-bottom: 0;
    font-size: 25px;
`; 


type Props = {
    planted: number,
    inprogress: number;
}

/** 
 * Banner content component.
 */
export default function BannerContent({planted, inprogress}: Props) {
    return (
         <BannerContainer>
            <Logo src={logo} />
            <CounterWrapper>
                <CountUp value={planted} />
                <SubTitle>trees planted</SubTitle>
                <Plus>+</Plus>
                <CountUp value={inprogress} />
                <SubTitle>trees planned</SubTitle>
                <CounterUnderline src={counterUnderline} />
            </CounterWrapper>
            <BannerText>This website shows the current number of trees planted by Arborday Foundation*</BannerText>
            <div className="mt-2 mb-5">
                <Link link="https://teamtrees.org/">Donate to teamtrees</Link>
            </div>
        </BannerContainer>
    );
}