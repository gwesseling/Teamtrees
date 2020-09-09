import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner';
import BannerDivider from './components/BannerDivider';
import Projects from './components/Projects';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import trees from './assets/trees.json';
import {sortByAttribute} from './sort';

import background from './assets/footer-hills-trees.svg';

type Project = {
    title: string;
    subtitle: string; 
    description: string; 
    trees: number; 
    continent: string; 
    year: string;
}

const ProjectsContainer = styled.div`
    transform: translatey(-45px);
`;

const PageContainer = styled.div`
    background: url(${background}) no-repeat center bottom,linear-gradient(#fff,#f6f6f4);
`;

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


function App() {
  const items: {[key: string]: Array<Project>} = sortByAttribute(trees, "year");

  return (
    <PageContainer>
      <Banner />
      <BannerDivider />
        <Container>
            <Row>
                <Col lg={11}>
                    <ProjectsContainer>
                        {Object.entries(items).map(([key, value], i) => 
                            <Projects title={key} items={value} key={i} /> 
                        )}
                    </ProjectsContainer>
                </Col>
                <Col lg={1}>
                    <IndexContainer>
                        {Object.keys(items).map((value, i) => 
                            <Index key={i}>{value}</Index>
                        )}
                    </IndexContainer>
                </Col>
            </Row>
        </Container>
    </PageContainer>
  );
}

export default App;
