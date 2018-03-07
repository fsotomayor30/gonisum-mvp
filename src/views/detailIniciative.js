import React, { Component } from 'react';
import '../css/content.css';
import firebase from 'firebase';
import Iniciative from '../components/Iniciative'
import { Icon, Row, Card, Chip, CardPanel, Col, ProgressBar, MediaBox, Input, CollectionItem } from 'react-materialize';

class detailIniciative extends Component {


    constructor({ match }) {
        super();
        this.state = {
            user: null,
            id: match.params.id,
            iniciatives: [],
        };
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('iniciatives');
        itemsRef.on('value', (snapshot) => {
            let iniciatives = snapshot.val();
            let newState = [];
            for (let iniciative in iniciatives) {
                if (iniciative === this.state.id) {
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
                        commentCommittee: iniciatives[iniciative].commentCommittee,
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
        return (
            <div>
                {this.state.iniciatives.map((iniciative, i) => {
                    return (

                        <Card style={{ marginTop: 40, marginLeft: 20, marginRight: 20 }} key={i}>
                            <h1>{iniciative.title}
                                <hr />
                                <h4 style={{ textAlign: 'center' }}> Categorie: {iniciative.categories} </h4>
                            </h1>
                            <Chip>
                                <img src={iniciative.photoUser} alt='Contact Person' />
                                {iniciative.displayUser}
                            </Chip>
                            <Row>
                                <Col l={3}>
                                    <MediaBox style={{ marginTop: '30%' }} className="responsive-img" src={iniciative.picture} caption="A demo media box1" width="300px" />

                                </Col>
                                <Col l={9}>
                                    <CardPanel className="teal lighten-4 black-text">
                                        <Row>
                                            <Col l={4}>
                                                <p style={{ textAlign: "justify" }}><Icon>attach_money</Icon>State: {iniciative.state}</p>
                                                <p style={{ textAlign: "justify" }}><Icon>attach_money</Icon>Money Min: {iniciative.moneyMin}</p>
                                                <p style={{ textAlign: "justify" }}><Icon>attach_money</Icon>Money Max: {iniciative.moneyMax}</p>
                                            </Col>

                                            <Col l={4}>
                                                <p style={{ textAlign: "justify" }}><Icon>supervisor_account</Icon>Participant Min: {iniciative.participantMin}</p>
                                                <p style={{ textAlign: "justify" }}><Icon>supervisor_account</Icon>ParticipantMax: {iniciative.participantMax}</p>
                                            </Col>

                                            <Col l={4}>
                                                <p style={{ textAlign: "justify" }}><Icon>supervisor_account</Icon>Collaborators: {iniciative.collaborators}</p>
                                                <p style={{ textAlign: "justify" }}><Icon>date_range</Icon>Date: {iniciative.date}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col l={12}>
                                            <span>{iniciative.like}  </span><Icon small>thumb_up</Icon><span></span>
                                                <span>{iniciative.progressMoney}/{iniciative.moneyMin} </span><Icon small>monetization_on</Icon>
                                                <ProgressBar progress={(iniciative.progressMoney / iniciative.moneyMin) * 100} />
                                            </Col>


                                        </Row>
                                    </CardPanel>
                                    <CardPanel className="teal lighten-4 black-text">
                                        <pre style={{ textAlign: "justify" }}><Icon>description</Icon>Description:  {iniciative.description}</pre>
                                    </CardPanel>
                                </Col>
                            </Row>
                        </Card>

                    )
                })}
            </div>

        )

    }
}

export default detailIniciative;