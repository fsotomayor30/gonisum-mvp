import React, { Component } from 'react';
import '../css/content.css';
import propTypes from 'prop-types';
import firebase from 'firebase';

class Content extends Component {

    static propTypes = {
        body: propTypes.object.isRequired
    };

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
    const { body } = this.props;
    return (
            <div className="Content">
                {body}
              </div>
        );
    }
  }

  export default Content;