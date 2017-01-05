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
        <CursiveHeader>Rush Spring 17</CursiveHeader>
        <CenteredContainer>
          <Link to="" className="hollow button gold large margin10" href="#">Coming Soon</Link>
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
        <CenteredContainer><h2 className="normal-header">Quick Links</h2></CenteredContainer>

        <div className="row">
          <div className="small-12 large-6 columns small-text-center large-text-left">
            <div className="">
              <h5 className="white styled-header">President: <a className="styled-inline-link" href="mailto:schuylerradliff@gmail.com">Schuyler Radliff</a></h5>
            </div>
            <div>
              <h5 className="white styled-header">Vice-President: <a className="styled-inline-link" href="mailto:zach.anthony0@gmail.com">Zach Anthony</a></h5>
            </div>
            <div>
              <h5 className="white styled-header">2nd Vice-President: <a className="styled-inline-link" href="mailto:xavier.thompson95@gmail.com">Xavier Thompson</a></h5>
            </div>
            <div>
              <h5 className="white styled-header">Sergeant at Arms: <a className="styled-inline-link" href="mailto:bobrown101@gmail.com">Brady Brown</a></h5>
            </div>
            <div>
              <h5 className="white styled-header">Chaplain: <a className="styled-inline-link" href="mailto:marteluis88@gmail.com">Luis Marte</a></h5>
            </div>
            <div>
              <h5 className="white styled-header">Treasurer: <a className="styled-inline-link" href="mailto:joseph.h.lorenc@gmail.com">Joseph Lorenc</a></h5>
            </div>
            <div>
              <h5 className="white styled-header">Rush Chair: <a className="styled-inline-link" href="mailto:ian.loomis95@gmail.com">Ian Loomis</a></h5>
            </div>
            <div>
              <h5 className="white styled-header">Social Chair: <a className="styled-inline-link" href="mailto:marteluis88@gmail.com">Luis Marte</a></h5>
            </div>

          </div>
          <div className="small-12 large-6 columns small-text-center large-text-right">
            <div className="">
              <h5 className="white styled-header"><a href="http://www.rit.edu/" className="styled-inline-link">RIT</a></h5>
            </div>
            <div>
              <h5 className="white styled-header"><a href="http://www.rit.edu/studentaffairs/greek/" className="styled-inline-link">Greek Life @ RIT</a></h5>
            </div>
            <div>
              <h5 className="white styled-header"><a href="https://thelink.rit.edu/organization/IFC/" className="styled-inline-link">Interfraternity Council (IFC) @ RIT</a></h5>
            </div>
            <div>
              <h5 className="white styled-header"><a href="https://www.phikappatau.org/" className="styled-inline-link">Phi Kappa Tau National</a></h5>
            </div>
            {/*<div className=>
              <button className="hollow button gold large margin10 large-6" href="#">Alumni Email</button>
            </div>*/}


          </div>


        </div>
      </Section>

    </div>
  );
};

export default HomePage;
