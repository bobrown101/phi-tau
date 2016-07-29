import React from 'react';
// import {Link} from 'react-router';
// import Header from '../../components/Header.js';
import Section from '../../components/Section.js';
// import AngledDivider from './AngledDivider.js';
import CursiveHeader from '../../components/CursiveHeader.js';
// import CenteredContainer from '../../components/CenteredContainer.js';

const NationalHistory = () => {
  return (
    <div>

      <Section >
        {/*<AngledDivider/>*/}
        <CursiveHeader>The National History</CursiveHeader>
        <CursiveHeader> of Phi Kappa Tau </CursiveHeader>
          {/*<h3 className="white styled-header animated fadeInUp delay05">The rush schedule is below</h3>

          <h5 className="white styled-header animated fadeInUp delay75">If you have any questions regarding rush and/or rush events, please contact our rush chair: <a className="styled-inline-link">Ian Loomis</a></h5>*/}
          <div className="row animated fadeInUp ">
            <div className="columns small-12 medium-8 small-offset-0 medium-offset-2">
              <p>
                Phi Kappa Tau was founded on March 17, 1906, at Miami University in Oxford, Ohio.
              </p>

              <p>
                The four honored founders were:
                Taylor Albert Borradaile,
                Clinton Dewitt Boyd,
                Dwight Ireneus Douglass,
                and William Henry Shideler.
              </p>

              <img src={require("../../images/national_founders.jpg")} />

              <p>
                There were 21 men who attended the first meeting. They agreed on the name Non-Fraternity Association because according to Founder Shideler,
                “A political combination of fraternities had taken charge of essentially all activities within the reach of the student body.”
              </p>

              <p>
                Three years later, on March 6, 1909, the organization changed its name to Phrenocon,
                combining the proposed names, Friends, Non-Fraternity, and Comrades.
              </p>

              <p>
                Phrenocon expanded in 1911 when a second chapter formed at Ohio University.
                Additional chapters were established at

                Ohio State University,
                Centre College,
                Mount Union College,
                and University of Illinois.
              </p>

              <p>
                On March 9, 1916, the Miami chapter withdrew from the National Phrenocon organization
                in order to become a Greek-letter fraternity. They adopted the name Phi Kappa Tau,
                and the remaining five Phrenocon chapters agreed to the name change in December of that year.
                The Miami chapter was then invited to return to the national organization as the Alpha chapter of Phi Kappa Tau.
              </p>

              <img src={require("../../images/crest.png")} />

            </div>

          </div>

      </Section>



    </div>
  );
};

export default NationalHistory;
