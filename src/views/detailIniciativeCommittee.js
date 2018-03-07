import React, { Component } from 'react';
import '../css/content.css';
import firebase from 'firebase';
import { Icon, Row, Card, Chip, CardPanel, Col, ProgressBar, MediaBox, Input, CollectionItem } from 'react-materialize';

class detailIniciativeCommittee extends Component {


    constructor({ match }) {
        super();
        this.state = {
            user: null,
            id: match.params.id,
            iniciatives: [],
            content: '',
        };
        this.Approve = this.Approve.bind(this);
        this.Reject = this.Reject.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user: user
            });
        }
        )
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        });
    }

    Approve() {
        const dbRefPropose = firebase.database().ref('iniciatives/' + this.state.id);
        dbRefPropose.update({
            "approved": true,
            "commentCommittee": this.state.content,
        });
        alert("Successfully approved");
        window.location = '/listCommitteeIniciatives';
    }



    Reject() {
        const dbRefPropose = firebase.database().ref('iniciatives/' + this.state.id);
        dbRefPropose.update({
            "approved": false,
            "commentCommittee": this.state.content,
        });
        alert("Successfully rejected");
        window.location = '/listCommitteeIniciatives';
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
                                    </CardPanel>
                                    <CardPanel className="teal lighten-4 black-text">
                                        <pre style={{ textAlign: "justify" }}><Icon>description</Icon>Description:  {iniciative.description}</pre>
                                    </CardPanel>
                                </Col>
                            </Row>

                            <div>

                                <center>
                                    <CardPanel className="teal lighten-4 black-text">
                                        <Row>
                                            <Input label="Comment:"
                                                s={12}
                                                icon="insert_comment"
                                                value={this.state.content}
                                                onChange={this.handleInputChange}
                                                style={{ resize: 'none' }}
                                                className="form-control"
                                                name="content"
                                                id="content"
                                                cols="30"
                                                rows="10"
                                                required="required" />
                                        </Row>

                                        <button
                                            type="button"
                                            onClick={this.Reject}
                                            className="btn btn-success"><i className="material-icons">add_circle_outline</i> Reject</button>

                                        <button
                                            type="button"
                                            style={{ marginLeft: 5 }}
                                            onClick={this.Approve}
                                            className="btn btn-success"><i className="material-icons">add_circle_outline</i> Approve</button>
                                    </CardPanel>
                                </center>
                                <br />
                            </div>
                        </Card>
                        
                    )
                })}
            </div>

        )

    }
}

export default detailIniciativeCommittee;