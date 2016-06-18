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
                Before we were Phi Kappa Tau, we were a local fraternity called Kappa Phi Omega
              </p>
              <p>
                Kappa Phi Omega was born on November 19, 1962, to increase the Greek opportunities
                for men at Rochester Institute of Technology
              </p>
              <p>
                It was founded by a dedicated group of freshman Buisness majors who wanted to offer brotherhood and fraternal life to
                fellow men on campus without the negative hazing practices so prevelent at the time.
              </p>
              <p>
                The four men that founded Kappa Phi Omega are: Bob Mitchell, Ron Sick, John Helms, and Gary Proud.
              </p>

              <p>
                The fraternity set about recruiting new members and becoming involved in campus activities.
                By 1964-65 Kappa Phi Omega captured top scholarship honors among fraternities,
                and acquired and improved a Chapter House on the old campus at 141 S. Plymouth Ave.,
                in downtown Rochester, NY.
              </p>

              <p>
                That year also witnessed the group's affiliation with the Phi Kappa Tau Fraternity,
                and upon completing all of the charting requirements,
                Kappa Phi Omega was installed as Gamma Nu Chapter of Phi Kappa Tau on April 2, 1966
                - the 85th Chapter at that time.
              </p>

              <p>
                When the RIT campus moved from downtown Rochester to its suburban campus in 1968,
                the fraternities gave up their historic Victorian Houses for modern on-campus residences.
                Gamma Nu''s new home was in the prominent building opposite the Southwest corner of the Sun Dial,
                the center of student residential life.
              </p>

              <p>
                In 2001 RIT opened six new free-standing mansions where Gamma Nu was relocated to and where it remains today.
                TODO - ADD A MAP PICTURE
              </p>

            </div>

          </div>

      </Section>



    </div>
  );
};

export default LocalHistory;
