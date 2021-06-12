import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '_STYLE/App.css';
import Banner from '_COMPONENTS/Banner';
import BannerDivider from '_COMPONENTS/BannerDivider';
import Projects from '_COMPONENTS/Projects';
import ScrollUp from '_COMPONENTS/ScrollUp';
import useApp from './containerHook';

import background from '_ASSETS/footer-hills-trees.svg';

const PageContainer = styled.div`
    background: url(${background}) no-repeat center bottom,linear-gradient(#fff,#f6f6f4);
`;

/** 
 * App entrypoint
 */
function App() {
  const {data} = useApp();

  return (
    <PageContainer>
        <Banner trees={data} />
        <BannerDivider />
        <Projects items={data} />
        <ScrollUp/>
    </PageContainer>
  );
}

export default App;
