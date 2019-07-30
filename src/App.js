import React from 'react';
import './App.css';
import { Button } from './Button';
import { TreatProvider } from 'react-treat';
import theme from './theme.treat.js';
import { ThemedButton } from './Button-theme';

function App() {
  return (
    <div>
      <Button text="hi"></Button>
      {/* <TreatProvider theme={theme}><ThemedButton>hello</ThemedButton></TreatProvider> */}
    </div>
  );
}

export default App;
