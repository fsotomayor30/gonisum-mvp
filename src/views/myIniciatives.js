import React, { Component } from 'react';
import '../css/content.css';
import Iniciative from '../components/Iniciative'
import firebase from 'firebase';
import { CardPanel, Row } from 'react-materialize';

class myIniciatives extends Component {


    constructor(props) {
        super(props);
        this.state = {
            user: null,
            iniciatives: [],
            _statate: false,
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

    componentDidMount() {
        const itemsRef = firebase.database().ref('iniciatives');
        itemsRef.on('value', (snapshot) => {
            let iniciatives = snapshot.val();
            let newState = [];
            for (let iniciative in iniciatives) {
                if (this.state.user.uid === iniciatives[iniciative].userId) {
                    newState.push({
                        id: iniciative,
                        title: iniciatives[iniciative].title,
                        description: iniciatives[iniciative].description,
                        categories: iniciatives[iniciative].categories,
                        moneyMax: iniciatives[iniciative].moneyMax,
                        moneyMin: iniciatives[iniciative].moneyMin,
                        collaborators: iniciatives[iniciative].collaborators,
                        participantMin: iniciatives[iniciative].participantMin,
                        participantMax: iniciatives[iniciative].participantMax,
                        picture: iniciatives[iniciative].picture,
                        userId: iniciatives[iniciative].userId,
                        date: iniciatives[iniciative].date,
                        approved: iniciatives[iniciative].approved,
                        like: iniciatives[iniciative].like,
                        progressMoney: iniciatives[iniciative].progressMoney,
                        photoUser: iniciatives[iniciative].photoUser,
                        displayUser: iniciatives[iniciative].displayUser,
                    });
                }
            }
            this.setState({
                iniciatives: newState,
                _statate: true,
            });
        });
    }

    render() {


        return (
            <Row>
                {(!this.state._statate) ? (
                    <div className="sk-circle">
                        <div className="sk-circle1 sk-child"></div>
                        <div className="sk-circle2 sk-child"></div>
                        <div className="sk-circle3 sk-child"></div>
                        <div className="sk-circle4 sk-child"></div>
                        <div className="sk-circle5 sk-child"></div>
                        <div className="sk-circle6 sk-child"></div>
                        <div className="sk-circle7 sk-child"></div>
                        <div className="sk-circle8 sk-child"></div>
                        <div className="sk-circle9 sk-child"></div>
                        <div className="sk-circle10 sk-child"></div>
                        <div className="sk-circle11 sk-child"></div>
                        <div className="sk-circle12 sk-child"></div>
                    </div>) : (<Row>
                        {(this.state.iniciatives.length === 0) ? (

                            <CardPanel style={{ margin: 50 }} className="teal lighten-4 black-text">
                                <h1>You have no initiatives, do not wait to propose</h1>
                                <img style={{ width: '30%' }} src='http://www.pngmart.com/files/1/Idea-Bulb-Transparent-PNG.png' alt='Person' />
                            </CardPanel>
                        ) : (
                                <Row>
                                    {this.state.iniciatives.map((iniciative, i) => {
                                        return (
                                            <Iniciative initiative={iniciative} />
                                        )
                                    })}

                                </Row>

                            )}
                        </Row>)}
            </Row>
        )




    }
}

export default myIniciatives;