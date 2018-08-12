import React from 'react';
import styles from './Footer.module.scss';
import config from '../../../config/SiteConfig';

const Footer = () => (
  <footer className={styles.footer}>
    {config.copyright} <a href="https://github.com/LeKoArts/gatsby-starter-portfolio-emma">Social Volunteer Network</a> {' by '}{' '}
    <a href="https://www.lekoarts.de">LinkedVolunteer</a>.
  </footer>
);

export default Footer;
