import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';

const Contact = () => (
  <div className="container contact-container">
    <Helmet title={`Instruction | ${config.siteTitle}`} />
    <Header>Instruction</Header>
    <Container text>
      <iframe src='https://webchat.botframework.com/embed/botvolunteer?s=GMhib3Mj5S8.cwA.Hso.QolNKT30BGgfZXlCHbOkDuiOLDWHHf4dYvEDkLajtzY' width = "800" height = "500"></iframe>
    </Container>
    <Footer />
  </div>
);

export default Contact;
