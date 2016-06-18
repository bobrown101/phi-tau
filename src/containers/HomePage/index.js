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

        <div className="row">
          <div className="column small-12">
            <h2 className="normal-header">Our Creed</h2>
          </div>
          <CenteredContainer>
            <div className="small-12 large-8 large-offset-2 columns text-left">
              <p>
                Phi Kappa Tau,
              </p>
              <p>
                By admitting me to membership, has conferred upon me a mark of distinction in which I take just pride.
              </p>
              <p>
                I believe in the spirit of brotherhood for which it stands.
              </p>
              <p>
                I shall strive to attain its ideals, and by so doing to bring to it honor and credit.
              </p>
              <p>
                I shall be loyal to my college and my chapter and shall keep strong my ties to them that I may ever retain the spirit of youth.
              </p>
              <p>
                I shall be a good and loyal citizen.
              </p>
              <p>
                I shall try always to discharge the obligation to others which arises from the fact that I am a fraternity man.
              </p>
              <p>
                Roland Maxwell,
              </p>
              <p>
                November 19, 1950
              </p>

            </div>

          </CenteredContainer>

        </div>
      </Section>

    </div>
  );
};

export default HomePage;
