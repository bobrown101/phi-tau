import React from 'react';
import { Link } from 'react-router';
import Section from '../../components/Section.js';
import CursiveHeader from '../../components/CursiveHeader.js';
import CenteredContainer from '../../components/CenteredContainer.js';

const NotFoundPage = () => {
  return (
    <Section >
      {/*<AngledDivider/>*/}
      <CursiveHeader>404</CursiveHeader>
      <CenteredContainer>
        <h3 className="white styled-header animated fadeInUp delay05">Had one too many drinks and got lost?</h3>
        <h3 className="white styled-header animated fadeInUp delay75">But seriously, you're drunk. Go <Link to="/" className="styled-inline-link">home</Link></h3>
      </CenteredContainer>


    </Section>
  );
};

export default NotFoundPage;
