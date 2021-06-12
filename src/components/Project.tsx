import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {toStringWithCommas} from '_LIBS/helpers';
import {ProjectType} from '_COMPONENTS/App/containerHook';

const ProjectCard = styled(Card)`
    background: #f4f4f2;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
    border: none;
    padding: 15px;
    margin-bottom: 1.5rem;
`;

const ProjectContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 25px;
`;

const ProjectTitle = styled.h1`
    color: #273654;
    font-weight: bold;
    font-weight: 600;
    margin-bottom: 25px;
    padding-left: 15px;
    padding-right: 15px;
`;

const Title = styled.h3`
    font-weight: bold;
    font-size: 20px;
`;

const SubTitle = styled.h4`
    font-size: 1.125rem;
`;

const Badge = styled.span`
    padding: .4rem .6rem;
    font-size: 75%;
    line-height: 1;
    letter-spacing: .025rem;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 100rem;
    color: #fff;
    background-color: #79a22e;
    font-style: normal;
    font-weight: 300;
    position: relative;
    text-transform: uppercase;
`;

const Description = styled.p`
    color: #625b51;
`;

type Props = {
    title: string,
    items: Array<ProjectType>
}

/** 
 * Project card.
 */
export default function Project({title, items}: Props) {
    return (
        <ProjectContainer>
            <ProjectTitle>{title}</ProjectTitle>
            <Row>
                {items.map(({title, subtitle, trees, description}, i) => 
                    <Col lg={6} key={i}>
                        <ProjectCard>
                            <Title>{title}</Title>
                            <SubTitle>{subtitle}</SubTitle>
                            <p>
                                <Badge>{toStringWithCommas(trees)} trees</Badge>
                            </p>
                            <Description>{description}</Description>
                        </ProjectCard>
                    </Col>
                )}
            </Row>
        </ProjectContainer>
    );
}