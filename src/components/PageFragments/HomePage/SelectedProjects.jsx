import React from 'react';

import SEO from '../../Seo';

const SelectedProjects = () => (
  <div style={{ lineHeight: '180%' }}>
    <div>
      <SEO
        title="About"
        path=""
        keywords={['Anh', 'Vu', 'Luong', 'FullStack developer', 'Python',
          'ReactJS', 'Machine Learning', 'Online Learning', 'Streaming Machine Learning']}
      />
      <h1 className="titleSeparate">Selected Projects</h1>
      <p>
        <h3 style={{ display: 'inline' }}>
          EzySmashers (Open source, 33 stars on Github)
        </h3>
        {' '}
        – Develop an MMO socket game using Ezyfox server and Unity client
      </p>
      <p>
        <h3 style={{ display: 'inline' }}>
          MaskHelper (Research project)
        </h3>
        {' '}
        – Develop a machine learning pipeline with Inception Residual Neural Networks model to
        recommend masks based on facial images, accelerating the Quantitative Fit Testing (QnFIT) -
        the standard to find the best Personal protective equipment (PPE) for medical workers in
        Australia
      </p>
      <p style={{ marginBottom: '2em' }}>
        <h3 style={{ display: 'inline' }}>
          CryoEM (Research project)
        </h3>
        {' '}
        – Use Generative Adversarial Networks (GAN) to generate 2D cryo-EM images, boosting the
        resolution of 3D reconstructed objects
      </p>
    </div>
  </div>
);
export default SelectedProjects;
