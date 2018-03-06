import React, { Component } from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase'
import { Collection, CollectionItem, Card } from 'react-materialize'

export default class Initiative extends Component {
  static propTypes = {
    prop: PropTypes
  }

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
    return (
     <div>
        <Collection>
          <CollectionItem href='#'>
            <h5>asd</h5>
            <Card className='small'
              actions={[<a href='#'>This is a Link</a>]}>
              I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
            </Card>
          </CollectionItem>
        </Collection>
      </div>
    )
  }
}
