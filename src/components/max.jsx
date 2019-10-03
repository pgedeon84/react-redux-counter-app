import React, { Component } from 'react';
import { connect } from 'react-redux';

class Max extends Component {
  render() {
    const value = this.props.counters.map((counter) => counter.value)
    return (
      <div>
        <h1>Max: {Math.max(...value, 0)}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counters: state.counters
  };
};

export default connect(mapStateToProps)(Max);
