import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from '_COMPONENTS/Project';
import trees from '_ASSETS/trees.json';
import {sortByAttribute} from '_LIBS/sort';

type Project = {
    title: string;
    subtitle: string; 
    description: string; 
    trees: number; 
    continent: string; 
    year: string;
}

const IndexContainer = styled(Col)`
    margin-top: 30px;
    padding-left: 15px;
    padding-top: 2.5px;
    padding-bottom: 2.5px;

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
    }
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
export default function Projects() {
    const items: {[key: string]: Array<Project>} = sortByAttribute(trees, "year");
    const keys = Object.keys(items);

    const refs: {[key: string]: any} = {};

    keys.forEach((key) => {
        refs[key] = React.createRef();
    });

    return (
        <Container>
            <Row>
                <Col lg={11}>
                    {Object.entries(items).map(([key, value], i) => 
                        <div ref={refs[key]}>
                            <Project title={key} items={value} key={i} /> 
                        </div>
                    )}
                </Col>
                <IndexContainer lg={1}>
                    {Object.keys(items).map((value, i) => 
                        <Index key={i} onClick={() => scrollToView(refs[value])}>{value}</Index>
                    )}
                </IndexContainer>
            </Row>
        </Container>
    );
} 