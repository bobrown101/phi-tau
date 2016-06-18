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
          <h3 className="white styled-header animated fadeInUp delay05">The rush schedule is below</h3>

          <h5 className="white styled-header animated fadeInUp delay75">If you have any questions regarding rush and/or rush events, please contact our rush chair: <a className="styled-inline-link">Ian Loomis</a></h5>

      </Section>



    </div>
  );
};

export default Rush;
