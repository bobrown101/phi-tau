import React from 'react';
// import {Link} from 'react-router';
// import Header from '../../components/Header.js';
import Section from '../../components/Section.js';
// import AngledDivider from './AngledDivider.js';
import CursiveHeader from '../../components/CursiveHeader.js';
// import CenteredContainer from '../../components/CenteredContainer.js';

const Rush = () => {
  return (
    <div>

      <Section >
        {/*<AngledDivider/>*/}
        <CursiveHeader>Rush Fall 16</CursiveHeader>
          <img className="animated fadeInUp delay05" src={require('../../images/rush-banner.jpg')} />


      </Section>



    </div>
  );
};

export default Rush;
