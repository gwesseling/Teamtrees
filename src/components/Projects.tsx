import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from '_COMPONENTS/Project';
import {sortByAttribute} from '_LIBS/sort';
import {ProjectType} from '_COMPONENTS/App/containerHook';

type Props = {
    items: Array<ProjectType> | undefined
} 

const IndexContainer = styled(Col)`
    margin-top: 30px;
    padding-left: 15px;
    padding-top: 2.5px;
    padding-bottom: 2.5px;
    overflow: auto;

    @media screen and (max-width: 992px ) {
        display: flex;
        flex-direction: row;
        order: -1;
    }
`;

const Index = styled.h1`
    color: #273654;
    font-weight: 600;
    font-size: 20px;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    @media screen and (max-width: 992px ) {
        margin-right: 15px;
        white-space: nowrap;
        margin-bottom: 25px;
    }
`;

const IndexTitle = styled.p`
    color: #273654;
    font-weight: bold;
    white-space: nowrap;
    margin-right: 25px;
`;

/** 
 * Scroll to project list. 
 */
function scrollToView(ref: any) {
    ref.current.scrollIntoView({behavior: 'smooth'});
}

/** 
 * Component that lists all projects for a year.
 */
export default function Projects({items = []}: Props) {
    const projects: {[key: string]: Array<ProjectType>} = sortByAttribute(items, "continent");
    const keys = Object.keys(projects);

    const refs: {[key: string]: any} = {};

    keys.forEach((key) => {
        refs[key] = React.createRef();
    });

    return (
        <Container>
            <Row>
                <Col lg={10}>
                    {Object.entries(projects).map(([key, value], i) => 
                        <div ref={refs[key]} key={i}>
                            <Project title={key} items={value} key={i} /> 
                        </div>
                    )}
                </Col>
                <IndexContainer lg={2}>
                    <IndexTitle>Go to:</IndexTitle>
                    {keys.map((value, i) => 
                        <Index key={i} onClick={() => scrollToView(refs[value])}>{value}</Index>
                    )}
                </IndexContainer>
            </Row>
        </Container>
    );
} 