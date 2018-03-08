import React, { Component } from 'react';
import '../css/content.css';
import firebase from 'firebase';
import IniciateCommittee from '../components/IniciativeCommittee'
import { Col, Row, Collection, CardPanel } from 'react-materialize'


class listCommitteeIniciatives extends Component {


    constructor(props) {
        super(props);
        this.state = {
            user: null,
            iniciatives: [],
        };
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('iniciatives');
        itemsRef.on('value', (snapshot) => {
            let iniciatives = snapshot.val();
            let newState = [];
            for (let iniciative in iniciatives) {
                if (iniciatives[iniciative].state === 'not reviewed') {
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
                        state: iniciatives[iniciative].state,
                        like: iniciatives[iniciative].like,
                        progressMoney: iniciatives[iniciative].progressMoney,
                        photoUser: iniciatives[iniciative].photoUser,
                        displayUser: iniciatives[iniciative].displayUser,
                    });
                }
            }
            this.setState({
                iniciatives: newState
            });
        });
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
        if (this.state.iniciatives.length === 0) {
            return (
                <CardPanel style={{ margin: 50 }} className="teal lighten-4 black-text">
                    <h1>There are no initiatives to evaluate</h1>
                    <img src='http://avap.es/wp-content/uploads/2015/07/Tiempo-de-evaluar-las-pol%C3%ADticas-p%C3%BAblicas.jpg' alt='Person' />
                </CardPanel>

            )
        } else {
            return (
                <Row>
                    <Col m={12} l={12}>
                        <Row>
                            {this.state.iniciatives.map((iniciative, i) => {
                                return (
                                    <Col s={12} l={6}>
                                        <Collection key={i}>
                                            <IniciateCommittee title={iniciative.title} picture={iniciative.picture}
                                                category={iniciative.categories} photoUser={iniciative.photoUser} displayUser={iniciative.displayUser}
                                                userId={iniciative.userId} description={iniciative.description}
                                                participantMin={iniciative.participantMin} participantMax={iniciative.participantMin}
                                                collaborators={iniciative.collaborators}
                                                moneyMax={iniciative.moneyMax} moneyMin={iniciative.moneyMin}
                                                approved={iniciative.approved} id={iniciative.id}></IniciateCommittee>
                                        </Collection>
                                    </Col>
                                )
                            })}

                        </Row>
                    </Col>
                </Row>

            )
        }


    }
}

export default listCommitteeIniciatives;