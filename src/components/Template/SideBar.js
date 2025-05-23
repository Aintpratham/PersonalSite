import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Pratham Shah</h2>
        <p>
          <a href="mailto:theprathammjshah@gmail.com">Theprathammjshah@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Pratham. I&apos;m currently studying {' '}
        Computer Programming and Analysis program at{' '}
        <a href="https://www.fanshawec.ca/" target="_blank" rel="noopener noreferrer">
          Fanshawe College.
        </a>{' '}
        I love exploring the intersection of tech, design, and creativity.
        <br />
        My current toolkit includes Python, C++, C#, Java, and Android Studio.
        Always learning, building, and lifting!
      </p>

      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Pratham Shah <Link to="/">aintpratham.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
