import React, { Component } from 'react';
import './App.css';
import { Container, Col } from 'react-bootstrap';
import { Profiles } from './components';

class App extends Component {
  render() {
    return (
      <Col xs={12} className="outer-container">
        <Profiles />
      </Col>
    );
  }
}

export default App;
