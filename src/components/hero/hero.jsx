import React from 'react';

import SectionLink from '../section-link/section-link';

import './hero.css';

const Hero = () => (
  <div className="hero">
    <h3 className="heading">
      Robots, Now we can deploy and devlop any thing .
    </h3>
    <SectionLink targetSectionId="section-demo" />
  </div>
);
export default Hero;
