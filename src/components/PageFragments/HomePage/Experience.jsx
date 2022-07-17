import React from 'react';
import { Col, Row } from 'antd';

import SEO from '../../Seo';

const Experience = () => (
  <div style={{ lineHeight: '180%' }}>
    <div>
      <SEO
        title="About"
        path=""
        keywords={['Anh', 'Vu', 'Luong', 'FullStack developer', 'Python',
          'ReactJS', 'Machine Learning', 'Online Learning', 'Streaming Machine Learning']}
      />
      <h1 className="titleSeparate">Work Experience</h1>
      <p style={{ marginBottom: '2em' }}>
        <Row>
          <Col xs={7}>
            <h3>Full-stack Developer</h3>
          </Col>
          <Col xs={11} style={{ display: 'flex', justifyContent: 'center' }}>
            <h3>Young Monkeys Open-source Organization</h3>
          </Col>
          <Col xs={6} style={{ display: 'flex', justifyContent: 'end' }}>
            <h3>Apr 2021 – present</h3>
          </Col>
        </Row>
        <li>
          Develop EzyPlatform and EzyFox ecosystem (including ezyfox-server, ezyhttp,etc) – a Java
          memory-efficient ecosystem for real-time streaming data with TCP, UDP, WebSocket, and
          HTTP protocols
        </li>
        <li>
          Maintain game-box: A scalable server engine for online/multi-player/real-time games
          powered by EzyFox ecosystem
        </li>
        <li>
          Tools and languages: Java core, Thymeleaf, React, Redux
        </li>
        {' '}
      </p>
      <p style={{ marginBottom: '2em' }}>
        <Row>
          <Col xs={7}>
            <h3>Research Assistant</h3>
          </Col>
          <Col xs={11} style={{ display: 'flex', justifyContent: 'center' }}>
            <h3>Alan Liew’s Lab, Griffith University, Australia</h3>
          </Col>
          <Col xs={6} style={{ display: 'flex', justifyContent: 'end' }}>
            <h3>Nov 2016 – present</h3>
          </Col>
        </Row>
        <li>
          Develop scalable ensemble models for incremental learning to deal with extremely
          high-speed streaming data
        </li>
        <li>
          Tools and languages: Python (PyTorch & Tensorflow & Scikit-learn & Pandas), Java (MOA
          library), MATLAB, R
        </li>
        {' '}
      </p>
      <p style={{ marginBottom: '2em' }}>
        <Row>
          <Col xs={7}>
            <h3>Machine Learning Engineer</h3>
          </Col>
          <Col xs={11} style={{ display: 'flex', justifyContent: 'center' }}>
            <h3>Scoville Co., Ltd., Japan</h3>
          </Col>
          <Col xs={6} style={{ display: 'flex', justifyContent: 'end' }}>
            <h3>Sep 2018 – Dec 2018</h3>
          </Col>
        </Row>
        <li>
          Research and develop Smart Gym system to assist fitness training and detection of pose
          violations
        </li>
        <li>
          Tools and languages: YOLOv3, CNN, RNN, CSRT Object Tracker, PyTorch, OpenCV, Django
        </li>
        {' '}
      </p>
      <p style={{ marginBottom: '2em' }}>
        <Row>
          <Col xs={7}>
            <h3>Software Developer</h3>
          </Col>
          <Col xs={11} style={{ display: 'flex', justifyContent: 'center' }}>
            <h3>NetLoading Ltd., Vietnam</h3>
          </Col>
          <Col xs={6} style={{ display: 'flex', justifyContent: 'end' }}>
            <h3>Feb 2016 – Oct 2016</h3>
          </Col>
        </Row>
        <li>
          Build NetLoading platform for intercity freight connection and transportation
        </li>
        <li>
          Tools and languages: Java Android, NodeJS, MySQL
        </li>
        {' '}
      </p>
      <p style={{ marginBottom: '2em' }}>
        <Row>
          <Col xs={7}>
            <h3>Game Developer</h3>
          </Col>
          <Col xs={11} style={{ display: 'flex', justifyContent: 'center' }}>
            <h3>Zitga Studio, Vietnam</h3>
          </Col>
          <Col xs={6} style={{ display: 'flex', justifyContent: 'end' }}>
            <h3>Nov 2015 – May 2016</h3>
          </Col>
        </Row>
        <li>
          Develop mobile games using Cocos2dx (C++) and Unity3D (C#)
        </li>
        <li>
          Products: Stickman Quest (500,000+ downloads on Google Play), Brain Games – 20 Puzzle
          (50,000+ downloads on Google Play)
        </li>
        {' '}
      </p>
    </div>
  </div>
);
export default Experience;
