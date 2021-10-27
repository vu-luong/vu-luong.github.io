import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import SkillsProgress from '../components/PageFragments/HomePage/SkillProgress';
import Experience from '../components/PageFragments/HomePage/Experience';

export default () => (
  <Layout className="outerPadding">
    <Layout
      className="container"
      style={{
        background: 'red',
      }}
    >
      <Header />
      <SidebarWrapper>
        <div>
          <AboutMe />
          <Experience />
          <SkillsProgress />
        </div>
      </SidebarWrapper>
    </Layout>
  </Layout>
);
