import React, { Component } from 'react'
import firebase from 'firebase'
import { Collection, CollectionItem, Card, CardTitle, Col, Row, CardPanel, ProgressBar, Icon } from 'react-materialize'

export default class Initiative extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Col s={12} l={6}>
        <Collection>
          <CollectionItem href='#'>
            <h5>Titulo</h5>
            <Row>
              <Col m={6}>
                <img width='100%' src="https://img.yapo.cl/images/02/0275538630.jpg" alt="image" style={{paddingTop:15}} />
                <Row>
                  <span>70/100 </span><Icon small>monetization_on</Icon>
                  <ProgressBar progress={70} /> 
                </Row>
                <Row>
                  <span>123  </span><Icon small>thumb_up</Icon><span>  </span>
                  <span>10 </span><Icon small>comment</Icon>
                </Row>

              </Col>
              <Col m={6}>
                <CardPanel className="teal lighten-4 black-text">
                  <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
                </CardPanel>
              </Col>
            </Row>

          </CollectionItem>
        </Collection>
      </Col>
    )
  }
}
