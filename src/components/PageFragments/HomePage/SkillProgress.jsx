import React from 'react';
import { Col, Row } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={22}>
        <ProgressBar
          percent={95}
          text="Programming (Python, Java, Matlab, ReactJS...)"
        />
        <ProgressBar
          percent={90}
          text="Data Structures and Algorithms"
        />
        <ProgressBar
          percent={85}
          text="Mathematics"
        />
        <ProgressBar
          percent={85}
          text="Creativity"
        />
      </Col>
      {/* <Col xs={24} sm={24} md={12}> */}
      {/*  <ProgressBar */}
      {/*    percent={90} */}
      {/*    text="Python" */}
      {/*  /> */}
      {/*  <ProgressBar */}
      {/*    percent={90} */}
      {/*    text="Java" */}
      {/*  /> */}
      {/*  <ProgressBar */}
      {/*    percent={80} */}
      {/*    text="ReactJS" */}
      {/*  /> */}
      {/*  <ProgressBar */}
      {/*    percent={80} */}
      {/*    text="" */}
      {/*  /> */}
      {/* </Col> */}
    </Row>
  </div>
);

export default SkillsProgress;
