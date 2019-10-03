import React from 'react';

const Counter = (props) => {
  return (
    <div>
      <h1>{props.value}</h1>
      <p>{props.name}</p>
      <p>
        <button onClick={() => props.incrementCount(props.index)}>+</button>
        <button onClick={() => props.decrementCount(props.index)}>-</button>
      </p>
    </div>
  );
};

export default Counter;
