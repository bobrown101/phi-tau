import React from 'react';
// import {Link} from 'react-router';
// import Header from '../../components/Header.js';
import Section from '../../components/Section.js';
// import AngledDivider from './AngledDivider.js';
import CursiveHeader from '../../components/CursiveHeader.js';
import CenteredContainer from '../../components/CenteredContainer.js';

const ContactPage = () => {
  const imgStyle = {
    height: "50px",
    padding: "5px"
  };
  const mapStyle = {
    height: "300px",
    padding: "5px"
  };

  return (
    <div>

      <Section >
        {/*<AngledDivider/>*/}
        <CursiveHeader>Contact Us</CursiveHeader>
          {/*<h3 className="white styled-header animated fadeInUp delay05">The rush schedule is below</h3>

          <h5 className="white styled-header animated fadeInUp delay75">If you have any questions regarding rush and/or rush events, please contact our rush chair: <a className="styled-inline-link">Ian Loomis</a></h5>*/}
          <div className="row animated fadeInUp ">
            <div className="columns small-10 medium-8 small-offset-1 medium-offset-2">
              <h5 className="white styled-header">President: <a className="styled-inline-link" href="mailto:mark.eddy2121@gmail.com">Mark Eddy</a></h5>
              <h5 className="white styled-header">Vice-President: <a className="styled-inline-link" href="mailto:rpirdy323@gmail.com">Robert Pirdy</a></h5>
              <h5 className="white styled-header">2nd Vice-President: <a className="styled-inline-link" href="mailto:conormobrien16@gmail.com">Conor O'Brien</a></h5>
              <h5 className="white styled-header">Sergeant at Arms: <a className="styled-inline-link" href="mailto:chris.schara@hotmail.com">Chris Schara</a></h5>
              <h5 className="white styled-header">Chaplain: <a className="styled-inline-link" href="mailto:bobrown101@gmail.com">Brady Brown</a></h5>
              <h5 className="white styled-header">Treasurer: <a className="styled-inline-link" href="mailto:matwell95@gmail.com">Matthew Atwell</a></h5>
              <h5 className="white styled-header">Advisor: <a className="styled-inline-link" href="mailto:Thedonatgammanu@aol.com">Gary Proud</a></h5>
              <h5 className="white styled-header">Advisor: <a className="styled-inline-link" href="mailto:Djpfsa@gmail.com">Dave Panish</a></h5>

              <br/>
              <h5 className="white styled-header">General Questions?: <a className="styled-inline-link" href="mailto:info@gammanu.org">Email Us!</a></h5>
              <br/>
              <CenteredContainer>
                  <a href="https://twitter.com/PhiKappaTau_RIT" ><img style={imgStyle} src={require("../../images/twitter.png")} /></a>
                  <a href="https://www.instagram.com/PhiKappaTau_RIT/" ><img style={imgStyle} src={require("../../images/instagram.png")} /></a>
              </CenteredContainer>
              <br/>
              <iframe style={mapStyle} src="https://www.google.com/maps/embed/v1/place?q=604+Charters+Way,+Rochester,+NY,+United+States&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"></iframe>
            </div>

          </div>

      </Section>



    </div>
  );
};

export default ContactPage;
