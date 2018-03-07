import React, { Component } from 'react';
import '../css/content.css';
import firebase from 'firebase';
import Iniciative from '../components/Iniciative'

class detailIniciative extends Component {


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
            <Iniciative/>

        )

    }
}

export default detailIniciative;