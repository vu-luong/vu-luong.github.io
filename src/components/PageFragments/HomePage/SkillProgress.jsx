import React from 'react';
import { Col, Row } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h1 className="titleSeparate">My Skills</h1>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={22}>
        <ProgressBar
          percent={95}
          text="Proficient in Java, Python; familiar with C#, C++, and JavaScript; previously used MATLAB, R"
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
