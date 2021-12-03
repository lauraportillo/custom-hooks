// React
import React from 'react';
// Components
import BlackCounter from './BlackCounter';
import YellowCounter from './YellowCounter';
// Styles
import '../stylesheets/App.scss';

const App = () => {
  return (
    <div>
      <BlackCounter />
      <YellowCounter />
    </div>
  );
};

export default App;
