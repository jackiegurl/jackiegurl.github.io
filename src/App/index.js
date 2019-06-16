import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import About from '../About';
import Contact from '../Contact';

import './App.css';

const links = [
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
];

const Navigation = () => (
  <div className="nav">
    <div>
      <Link to="/">Jackie Wung</Link>
    </div>
    <ul className="nav-links">
      {links.map(link => (
        <li key={link.text}>
          <Link to={link.href}>{link.text}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Home = () => (
  <h1>
    Jackie Wung is a Software Engineer and Creative Consultant living in Los
    Angeles.
  </h1>
);

export default function() {
  return (
    <BrowserRouter>
      <Navigation />
      <main>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </main>
    </BrowserRouter>
  );
}
