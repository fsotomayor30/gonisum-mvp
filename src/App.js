import React, { Component } from 'react';
import propTypes from 'prop-types';

import './App.css';

import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

class App extends Component {
  static propTypes = {
    children: propTypes.object.isRequired,
  };
  render() {
    const { children } = this.props;
    return (
      <div className="App">

        <Header/>
        <Content body={children}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
