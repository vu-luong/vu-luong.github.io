import React from 'react';

import SEO from '../../Seo';

const AboutMe = () => (
  <div>
    <div>
      <SEO
        title="About"
        path=""
        keywords={['Anh', 'Vu', 'Luong', 'FullStack developer', 'Python',
          'ReactJS', 'Machine Learning', 'Online Learning', 'Streaming Machine Learning']}
      />
      <h1 className="titleSeparate">Experience</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dolor eu nisi luctus
        viverra non vel justo. Vivamus id neque eu purus accumsan euismod a ac sapien. Suspendisse
        ut enim eget lectus eleifend pellentesque eu id sapien. Praesent scelerisque commodo
        metus, ut consequat odio volutpat ut. Quisque mattis commodo erat, fringilla aliquam
        nulla. Curabitur mollis urna tellus. Suspendisse quis dolor sed tellus egestas iaculis
        vitae eget ligula. Nam ut nibh diam.

        Nullam purus ex, pellentesque non commodo quis, pulvinar sit amet leo. Fusce venenatis
        nisl vel leo pharetra, quis ullamcorper ante dictum. Nam lobortis, sem non euismod
        efficitur, dui nunc luctus ipsum, ut rhoncus neque lectus nec purus. Donec non dictum
        lorem, sit amet efficitur elit. Maecenas volutpat ante sit amet fermentum rhoncus. In
        posuere molestie ipsum et sagittis. Curabitur commodo turpis nulla, bibendum posuere mi
        malesuada ut. Vestibulum elementum rutrum dignissim. Nam sit amet ornare massa, sit amet
        ultrices leo. Fusce egestas nisi orci, non consectetur nibh gravida vitae. Donec fermentum
        dui at vulputate ornare.
        {' '}
      </p>
    </div>
  </div>
);
export default AboutMe;
