import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';

const About = () => (
  <div className="container about-container">
    <Helmet title={`Profile | ${config.siteTitle}`} />
    <Header>{config.siteTitle}</Header>
    <Container text>
      <h2>Hi</h2>
      <p>
        My name is Raccoon. The only survival of Guardian of the Galaxy squad. 
        Besides my acting career, I am also a blood donor for Red Cross Organization. 
        With my best friend Groot, I am happy to contribute in making our Earth Green again.
      </p>
      <br/>
      <h2>Activities</h2>
      <p>
        - Blood Donation at National Institute of Health, Bethesda, May 2018. <br/> 
        - Tree Maintenance at Rock Creek Park, June 2018
      </p>
      <br/>
      <h2>Reward: 20 </h2>
      <br/>
      <h2>Suggested Friend: </h2>
      <br/>

    </Container>
    <Footer />
  </div>
);

export default About;
