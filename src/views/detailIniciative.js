import React, { Component } from 'react';
import '../css/content.css';
import firebase from 'firebase';

import Comment from '../components/Comment'
import { Icon, Row, Card, Chip, CardPanel, Modal, Col, ProgressBar, MediaBox, Input } from 'react-materialize';

class detailIniciative extends Component {


    constructor({ match }) {
        super();
        this.state = {
            user: null,
            id: match.params.id,
            iniciatives: [],
            comments: [],
            content: '',
            money: 0,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSaveComment = this.handleSaveComment.bind(this);
        this.contribute = this.contribute.bind(this);
        this.Like = this.Like.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        });
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

        const commentRef = firebase.database().ref('comment');
        commentRef.on('value', (snapshot) => {
            let comments = snapshot.val();
            let newState = [];
            for (let comment in comments) {
                newState.push({
                    id: comment,
                    idIniciative: comments[comment].idIniciative,
                    content: comments[comment].content,
                    photoUser: comments[comment].photoUser,
                    displayUser: comments[comment].displayUser,
                    idUser: comments[comment].idUser,
                    titleIniciative: comments[comment].titleIniciative,
                });
            }
            this.setState({
                comments: newState
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

    contribute() {
        if (this.state.money > (this.state.iniciatives[0].moneyMax - this.state.iniciatives[0].progressMoney)) {
            alert("I exceed the maximum limit")
        } else {
            const dbRefInvest = firebase.database().ref('iniciatives/' + this.state.iniciatives[0].id);
            dbRefInvest.update({
                progressMoney: parseInt(this.state.iniciatives[0].progressMoney, 10) + parseInt(this.state.money, 10),
            });

            const record = {
                idAuthor: this.state.user.uid,
                idInitiative: this.state.iniciatives[0].id,
                amount: parseInt(this.state.money, 10),
                titleInitiative: this.state.iniciatives[0].title,

            };

            const dbRef = firebase.database().ref('contributions');
            const newContributions = dbRef.push();
            newContributions.set(record);
            this.setState({
                money: 0,
            });
            alert("Thanks for contributing")
        }
    }

    handleSaveComment() {
        if (this.state.content === '') {
            alert("There can not be empty fields");
        } else {
            const record = {
                idIniciative: this.state.iniciatives[0].id,
                content: this.state.content,
                photoUser: this.state.user.photoURL,
                displayUser: this.state.user.displayName,
                idUser: this.state.user.uid,
                titleIniciative: this.state.iniciatives[0].title,
            };

            const dbRef = firebase.database().ref('comment');
            const newComment = dbRef.push();
            newComment.set(record);
            alert("added correctly");
            this.setState({
                content: '',
            });
        }
    }

    Like() {

        const dbRefInvest = firebase.database().ref('iniciatives/' + this.state.iniciatives[0].id);
        dbRefInvest.update({
            like: this.state.iniciatives[0].like + 1,
        });
        alert("Thanks for your like")

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
                                <Col l={3} s={12}>
                                    <MediaBox style={{ marginTop: '30%' }} className="responsive-img" src={iniciative.picture} caption="A demo media box1" width="300px" />

                                </Col>
                                <Col l={9}>
                                    <CardPanel className="teal lighten-4 black-text">
                                        <Row>
                                            <Col l={4}>

                                                <p style={{ textAlign: "justify" }}><Icon>content_paste</Icon>State: {iniciative.state}</p>
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
                                            <Col l={12} s={12} m={12}>
                                                <span>{iniciative.like}</span><span onClick={this.Like}><Icon small>thumb_up</Icon></span>
                                                <span>{iniciative.progressMoney}/{iniciative.moneyMin} </span><Icon small>monetization_on</Icon>
                                                <ProgressBar progress={(iniciative.progressMoney / iniciative.moneyMin) * 100} />
                                            </Col>


                                        </Row>
                                    </CardPanel>
                                    <CardPanel className="teal lighten-4 black-text">
                                        <pre style={{ textAlign: "justify" }}><Icon>description</Icon>Description:  {iniciative.description}</pre>
                                    </CardPanel>
                                </Col>

                                <Modal
                                    header='Invest'
                                    trigger={<button className="btn btn-primary" style={{ marginTop: 10 }} type="submit">Invest  <i className="material-icons">monetization_on</i></button>}>
                                    <Row>
                                        <Input label="Nisum Coins:"
                                            style={{ textAlign: 'right' }}
                                            s={12}
                                            value={this.state.money}
                                            onChange={this.handleInputChange}
                                            name="money"
                                            id="money" type="number"
                                            className="form-control"
                                            required="required" />
                                    </Row>
                                    <center>
                                        <button
                                            onClick={this.contribute}
                                            type="button"
                                            className="btn btn-success">Contribute!!</button>
                                    </center>

                                </Modal>

                                <Col l={12}><CardPanel className="teal lighten-4 black-text">
                                    <h1><Icon medium>comments</Icon> Comments</h1>
                                    {this.state.comments.map((comment, i) => {
                                        if (comment.idIniciative === iniciative.id) {
                                            return (
                                                <div key={i}>
                                                    <Comment id={comment.id} displayUser={comment.displayUser} photoUser={comment.photoUser} idIniciative={comment.idIniciative} content={comment.content}></Comment>
                                                    <hr />
                                                </div>
                                            )
                                        }else{return null;}
                                    })}


                                    <center>
                                        <div>
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
                                                onClick={this.handleSaveComment}
                                                className="btn btn-success"><i className="material-icons">add_circle_outline</i> New Comment</button>

                                        </div>
                                    </center>
                                </CardPanel></Col>
                            </Row>


                        </Card>

                    )
                })}
            </div>

        )

    }
}

export default detailIniciative;