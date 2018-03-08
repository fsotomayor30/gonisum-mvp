import React, { Component } from 'react';
import '../css/content.css';
import { Col, Row, MediaBox } from 'react-materialize'
import firebase from 'firebase';

class profile extends Component {


    constructor(props) {
        super(props);
        this.state = {
            user: null,
            iniciatives: [],
        };
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user: user
            });
        }
        )

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
                        state: iniciatives[iniciative].state,
                        like: iniciatives[iniciative].like,
                        progressMoney: iniciatives[iniciative].progressMoney,
                        photoUser: iniciatives[iniciative].photoUser,
                        displayUser: iniciatives[iniciative].displayUser,
                        commentCommittee: iniciatives[iniciative].commentCommittee,
                    });
                }
            }
            this.setState({
                iniciatives: newState
            });
        });

    }

    render() {
        if (this.state.user) {
            return (
                <Row>
                    <div className="card-panel" style={{ marginTop: 40, marginLeft: 20, marginRight: 20 }}>
                        <Row>
                            <Col l={5}>
                                <p>Name: {this.state.user.displayName}</p>
                                <p>Location: </p>
                                Nacionality:</Col>
                            <Col l={5}>
                                <p>Email: {this.state.user.email} </p>
                                <p>Reamining Coins: </p></Col>
                            <Col l={2}>
                                <MediaBox className="responsive-img" src={this.state.user.photoURL} caption="A demo media box1" width="300px" /></Col>
                        </Row>
                        <Row>
                            <Col l={4}><div className="card-panel"><p><b>Funded Initiatives: </b></p></div></Col>
                            <Col l={4}><div className="card-panel"><p><b>My Initiatives: </b>
                                {this.state.iniciatives.map((iniciative, i) => {
                                    return (
                                        <li key={i}>
                                            {iniciative.title}
                                        </li>
                                    )
                                })}
                            </p></div></Col>
                            <Col l={4}><div className="card-panel"><p><b>Likes / Comments</b></p></div></Col>
                        </Row>
                    </div>
                </Row>

            )

        } else {
            return null;
        }
    }
}

export default profile;