import React, { Component } from 'react';
import './css/content.css';
import propTypes from 'prop-types';
import firebase from 'firebase';

class admin extends Component {


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
            <div></div>

        )

    }
}

export default admin;