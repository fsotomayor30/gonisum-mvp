import React, { Component } from 'react';
import '../css/content.css';
import firebase from 'firebase';
import { Col, Row, MediaBox } from 'react-materialize'

class stages extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user: user
      });
    }
    )
  }

  render() {

    if (this.state.user) {
      return (
        <Row style={{ marginTop: 70 }}>
          <Col l={4} m={12}>
            <div className="card">
              <div className="card-image">
                <center>
                  <img alt="uno" style={{ width: 250, height: 250, maxWidth: 250, maxHeight: 250 }} src="https://image.freepik.com/vector-gratis/hombre-de-negocios-con-una-gran-idea_1012-219.jpg" />
                </center>
              </div>
              <div className="card-content">
                <span className="card-title" style={{ color: 'black' }}>Propose Initiative</span>
              </div>
              <div className="card-action">
                <a href="/newiniciative">Create an Initiative</a>
              </div>
            </div>
          </Col>

          <Col l={4} m={12}>
            <div className="card">
              <div className="card-image">
                <center>
                  <img alt="dos" style={{ width: 250, height: 250, maxWidth: 250, maxHeight: 250 }} src="https://media.wired.com/photos/5955b36196d7ef123a1d4273/master/w_1800,c_limit/529386299green-F-TOP-ART.jpg" />
                </center>
              </div>
              <div className="card-content">
                <span className="card-title" style={{ color: 'black' }} >Invest in an Iniciative</span>
              </div>
              <div className="card-action">
                <a href="/listAprovedIniciatives">Explore initiatives</a>
              </div>
            </div>
          </Col>

          <Col l={4} m={12}>
            <div className="card">
              <div className="card-image">
                <center>
                  <img alt="tres" style={{ width: 250, height: 250, maxWidth: 250, maxHeight: 250 }} src="https://cacm.acm.org/system/assets/0000/9797/111912_CACMpg36_Why-We-Need.large.jpg?1476779408&1353363907" />
                </center>
              </div>
              <div className="card-content">
                <span className="card-title" style={{ color: 'black' }}>Shared result</span>
              </div>
              <div className="card-action">
                <a href="/listSuccessIniciatives">See successful initiatives</a>
              </div>
            </div>
          </Col>

        </Row>
      );
    } else {
      return (
        <Row style={{ marginTop: 70 }}>
          <Col offset={"l1"}></Col>
          <Col l={3}>
            <div className="card">
              <div className="card-image">
                <img alt="dos" src="https://image.freepik.com/vector-gratis/hombre-de-negocios-con-una-gran-idea_1012-219.jpg" />

              </div>
              <div className="card-content">
                <span className="card-title" style={{ color: 'black' }}>Propose Iniciative</span>
              </div>

            </div>
          </Col>

          <Col l={3}>
            <div className="card">
              <div className="card-image">
                <img alt="dos" src="https://media.wired.com/photos/5955b36196d7ef123a1d4273/master/w_1800,c_limit/529386299green-F-TOP-ART.jpg" />

              </div>
              <div className="card-content">
                <span className="card-title" style={{ color: 'black' }} >Invest in an Iniciative</span>
              </div>

            </div>
          </Col>

          <Col l={3}>
            <div className="card">
              <div className="card-image">
                <img alt="dos" src="http://tamgroup-ye.com/wp-content/uploads/2016/12/Success-group-award-590x260.jpg" />

              </div>
              <div className="card-content">
                <span className="card-title" style={{ color: 'black' }}>Shared result</span>
              </div>

            </div>
          </Col>

        </Row>
      );
    }
  }
}

export default stages;