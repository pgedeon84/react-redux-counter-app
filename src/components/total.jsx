import React, { Component } from 'react';
import { connect } from 'react-redux';

class Total extends Component {
  render() {
    const total = this.props.counters.reduce((acc, counter) => acc + counter.value, 0 );
    return (
      <div>
        <h1>Total: {total}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counters: state.counters
  };
};

export default connect(mapStateToProps)(Total);
