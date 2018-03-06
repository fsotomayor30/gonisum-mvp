import React, { Component } from 'react';
import {Footer } from 'react-materialize';

class Footers extends Component {
  render() {
    return (
      <Footer style={{ position: 'absolute', width: '100%',bottom: 0, backgroundColor: 'rgb(73, 171, 210)' }} copyrights="2018 goNisum">
          <h5 className="Footer white-text"><i className="material-icons small">mood</i>   goNisum Crowdfunding</h5>
          <p className="Footer grey-text text-lighten-4">Platform for the proposal of initiatives</p>
        </Footer>
      );
    }
  }

  export default Footers;