import React from 'react';
import {Link} from 'react-router';
import Header from '../../components/Header.js';
import Section from '../../components/Section.js';
// import AngledDivider from './AngledDivider.js';
import CursiveHeader from '../../components/CursiveHeader.js';
import CenteredContainer from '../../components/CenteredContainer.js';

const HomePage = () => {
  return (
    <div>
      <Header/>

      {/*<Section containsDivider>*/}
      <Section >
        {/*<AngledDivider/>*/}
        <CursiveHeader>Rush Fall 16</CursiveHeader>
        <CenteredContainer>
          <Link to="/rush" className="hollow button gold large margin10" href="#">Find Out More</Link>
        </CenteredContainer>


      </Section>

      <Section inverted>
        {/*<AngledDivider reversed/>*/}
          <h2 className="normal-header">The Longest Standing</h2>
          <h2 className="normal-header">Fraternity on Campus</h2>
          <CenteredContainer>
            <img src={require('../../images/crest.png')} className="crest small"/>
          </CenteredContainer>

      </Section>

      <Section>
        <CenteredContainer><h2 className="normal-header">Contact Us</h2></CenteredContainer>

        <div className="row">
          <div className="large-6 columns text-left">
            <div className="">
              <h5 className="white styled-header">President: <a className="styled-inline-link">Mark Eddy</a></h5>
            </div>
            <div>
              <h5 className="white styled-header">Vice-President: <a className="styled-inline-link">Robert Pirdy</a></h5>
            </div>
            <div>
              <h5 className="white styled-header">2nd Vice-President: <a className="styled-inline-link">Connor Obrien</a></h5>
            </div>
            <div>
              <h5 className="white styled-header">Seargant at Arms: <a className="styled-inline-link">Chris Schara</a></h5>
            </div>
            <div>
              <h5 className="white styled-header">Chaplain: <a className="styled-inline-link">Brady Brown</a></h5>
            </div>
            <div>
              <h5 className="white styled-header">Rush Chair: <a className="styled-inline-link">Ian Loomis</a></h5>
            </div>

          </div>
          <div className="large-6 columns">
            <CenteredContainer>
              <button className="hollow button gold large margin10 large-6" href="#">Our on-campus house</button>
              <button className="hollow button gold large margin10 large-6" href="#">Alumni Email</button>
            </CenteredContainer>

          </div>


        </div>
      </Section>

    </div>
  );
};

export default HomePage;