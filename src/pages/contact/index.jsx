import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import ContactForm from '../../components/PageFragments/ContactForm';
import SEO from '../../components/Seo';

const Contact = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Contact"
        description="Hello folks Vu Luong here. You can contact me through the contact form on this page.
                    Please feel free to contact me, don't be shy guys, just remember Vu Luong is always open to talk about Machine Learning (ML), Online ML, Incremental ML, Streaming ML.
                    Currently I'm a PhD student at Griffith University. Find me on github - vu-luong"
        path="/contact"
        keywords={['Anh', 'Vu', 'Luong', 'FullStack developer', 'Python',
          'ReactJS', 'Machine Learning', 'Online Learning', 'Streaming Machine Learning']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Contact</h1>
        </div>
        <Row gutter={[40, 20]}>
          <Col sm={24} md={24} lg={12}>
            <img
              src="../../contact.png"
              alt="contact"
              className="widthFull contactImgBorder"
            />
          </Col>
          <ContactForm />
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Contact;
