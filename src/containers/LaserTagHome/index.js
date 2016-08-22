import React from 'react';
import {Link} from 'react-router';
// import Header from '../../components/Header.js';
import Section from '../../components/Section.js';
// import AngledDivider from './AngledDivider.js';
import CursiveHeader from '../../components/CursiveHeader.js';
import CenteredContainer from '../../components/CenteredContainer.js';
import LaserTagHeader from '../../components/LaserTagHeader.js';

const LaserTagHome = () => {
  return (
    <div>
      <LaserTagHeader/>
      {/*<Section containsDivider>*/}

      <Section inverted lasertag>
        {/*<AngledDivider reversed/>*/}
          <h2 className="normal-header">The Longest Standing</h2>
          <h2 className="normal-header">Fraternity on Campus</h2>
          <CenteredContainer>
            <img src={require('../../images/crest.png')} className="crest small"/>
          </CenteredContainer>

      </Section>

    </div>
  );
};

export default LaserTagHome;
