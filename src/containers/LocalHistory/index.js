import React from 'react';
// import {Link} from 'react-router';
// import Header from '../../components/Header.js';
import Section from '../../components/Section.js';
// import AngledDivider from './AngledDivider.js';
import CursiveHeader from '../../components/CursiveHeader.js';
// import CenteredContainer from '../../components/CenteredContainer.js';

const LocalHistory = () => {
  return (
    <div>

      <Section >
        {/*<AngledDivider/>*/}
        <CursiveHeader>The Local History</CursiveHeader>
        <CursiveHeader> of Gamma Nu </CursiveHeader>
          {/*<h3 className="white styled-header animated fadeInUp delay05">The rush schedule is below</h3>

          <h5 className="white styled-header animated fadeInUp delay75">If you have any questions regarding rush and/or rush events, please contact our rush chair: <a className="styled-inline-link">Ian Loomis</a></h5>*/}
          <div className="row animated fadeInUp ">
            <div className="columns small-10 medium-8 small-offset-1 medium-offset-2">
              <p>
                Before we were Phi Kappa Tau, we were a local fraternity called Kappa Phi Omega.
              </p>
              <p>
                It was founded by a dedicated group of freshman Buisness majors on November 19, 1962 who wanted to offer brotherhood and fraternal life to
                fellow men on campus without the negative hazing practices so prevelent at the time.
              </p>
              <p>
                The four men that founded Kappa Phi Omega were: Bob Mitchell, Ron Sick, John Helms, and Gary Proud.
              </p>

              <p>
                By 1964-65 Kappa Phi Omega captured top scholarship honors among fraternities,
                and acquired and improved a Chapter House on the old campus at 141 S. Plymouth Ave.,
                in downtown Rochester, NY.
              </p>

              <img src={require("../../images/oldhouse.jpg")} />


              <p>
                That year also witnessed the group's affiliation with the Phi Kappa Tau Fraternity,
                and upon completing all of the charting requirements,
                Kappa Phi Omega was installed as Gamma Nu Chapter of Phi Kappa Tau on April 2, 1966
                - the 85th Chapter at that time.
              </p>

              <hr/>

              <p>
                When the RIT campus moved from downtown Rochester to its suburban campus in 1968,
                the fraternities gave up their historic Victorian Houses for modern on-campus residences.
                Gamma Nu's new home was in the prominent building opposite the Southwest corner of the Sun Dial,
                the center of student residential life.
              </p>

              <p>
                In 2001 RIT opened six new free-standing mansions where Gamma Nu was relocated to and where it remains today.
              </p>

              <img src={require("../../images/phi-tau-banner-compressed.jpeg")} />

              <hr />

              <p>
                Today, we are very lucky to have one of our local founders, Gary Proud, serve as an advisor for our chapter.
                He went on to have a successful career - even becoming a seven-term NY State Assemblyman. He began advising us in 2004.
                We appreciate all of the knowledge and contributions you have given to this fraternity Gary, and hope you have many more years to come.
              </p>

              <img src={require("../../images/gary_proud.jpg")} />


            </div>

          </div>

      </Section>



    </div>
  );
};

export default LocalHistory;
