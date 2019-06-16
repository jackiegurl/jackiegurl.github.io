import React from 'react';

import './About.css';

export default function() {
  return (
    <>
      <h2>
        Jackie Wung is a Software Engineer, Creative Consultant, Cook, Designer,
        etc born and raised in Los Angeles.
      </h2>
      <div className="about-content">
        <p>
          She is currently Engineering at{' '}
          <a className="underline" href="https://zebraiq.com">
            ZebraIQ
          </a>{' '}
          and volunteering on the tech team at{' '}
          <a className="underline" href="https://andrewyang2020.com">
            Andrew Yang 2020
          </a>
          .
        </p>
        <p>
          Previously, she was an early Engineer at{' '}
          <a className="underline" href="https://tinder.com">
            Tinder
          </a>
          , where she was part of the 3-person team that built the Tinder Web.
          She also lead the tech team at{' '}
          <a href="https://girlboss.com" className="underline">
            Girlboss
          </a>{' '}
          as the first engineering hire, where she built the entire Girlboss
          Community product from scratch as the sole Engineer.
        </p>
        <p style={{ paddingTop: '30px' }}>
          <a href="https://instagram.com/jacquelinewung" className="underline">
            Instagram
          </a>
        </p>
      </div>
    </>
  );
}
