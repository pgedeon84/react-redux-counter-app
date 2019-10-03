import React from 'react';
import Counters from './counters';
import Total from './total';
import Max from './max';
import CreateCounter from './createCounter';

const App = () => {
  return (
    <div className="myAppContainer">
      <CreateCounter />
      <Counters />
      <div>
        <Total />
        <Max />
      </div>
    </div>
  );
};

export default App;
