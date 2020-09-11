import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import trees from '../assets/trees.json';
import {sortByAttribute} from '../sort';

type Project = {
    title: string;
    subtitle: string; 
    description: string; 
    trees: number; 
    continent: string; 
    year: string;
}

const IndexContainer = styled.div`
    margin-top: 30px;
    padding-left: 15px;
    padding-top: 2.5px;
    padding-bottom: 2.5px;
`;

const Index = styled.h1`
    color: #273654;
    font-weight: 600;
    font-size: 20px;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

function scrollToView(ref: any) {
    ref.current.scrollIntoView({behavior: 'smooth'});
}

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
                <Col lg={1}>
                    <IndexContainer>
                        {Object.keys(items).map((value, i) => 
                            <Index key={i} onClick={() => scrollToView(refs[value])}>{value}</Index>
                        )}
                    </IndexContainer>
                </Col>
            </Row>
        </Container>
    );
} 