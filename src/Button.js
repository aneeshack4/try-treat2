import * as React from 'react';
import * as styles from './Button.treat.js';

export const Button = ({ text }) => 
  <button class="${styles.button}">{text}</button>
;