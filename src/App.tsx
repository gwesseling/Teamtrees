import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner';
import BannerDivider from './components/BannerDivider';
import Projects from './components/Projects';
import ScrollUp from './components/ScrollUp';

import background from './assets/footer-hills-trees.svg';

const PageContainer = styled.div`
    background: url(${background}) no-repeat center bottom,linear-gradient(#fff,#f6f6f4);
`;

/** 
 * App entrypoint
 */
function App() {
  return (
    <PageContainer>
        <Banner />
        <BannerDivider />
        <Projects />
        <ScrollUp/>
    </PageContainer>
  );
}

export default App;
