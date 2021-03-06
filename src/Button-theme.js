import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './Button.treat.js';

export const ThemedButton = props => {
  const styles = useStyles(styleRefs);

  return <button {...props} className={styles.button} />;
};