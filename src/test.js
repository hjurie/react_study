import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Test extends Component {
    static propTypes = {
        title : PropTypes.string.isRequired,
        img : PropTypes.string.isRequired
    }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          {this.props.title}
          <img src={this.props.photo} />
        </p>
      </div>
    );
  }
}

export default Test;
