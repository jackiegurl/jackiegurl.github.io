import React from 'react';

import Vanilla from '../assets/vanilla.png';
import './Contact.css';

export default function() {
  return (
    <div>
      For inquiries, please{' '}
      <a href="mailto:jacquelinewung@gmail.com" className="underline">
        email me
      </a>
      .
    </div>
  );
}
