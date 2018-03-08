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
            comments: [],
            contributions: [],
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

        const contributionsItems = firebase.database().ref('contributions');
        contributionsItems.on('value', (snapshot) => {
            let contributions = snapshot.val();
            let newState = [];
            for (let contribution in contributions) {
                if (this.state.user.uid === contributions[contribution].idAuthor) {
                    newState.push({
                        id: contribution,
                        idAuthor: contributions[contribution].idAuthor,
                        idInitiative: contributions[contribution].idInitiative,
                        amount: contributions[contribution].amount,
                        titleInitiative: contributions[contribution].titleInitiative,
                        
                    });
                }
            }
            this.setState({
                contributions: newState
            });
        });

        const commentRef = firebase.database().ref('comment');
        commentRef.on('value', (snapshot) => {
            let comments = snapshot.val();
            let newState = [];
            for (let comment in comments) {
                if (this.state.user.uid === comments[comment].idUser) {
                    newState.push({
                        id: comment,
                        content: comments[comment].content,
                        displayUser: comments[comment].displayUser,
                        idIniciative: comments[comment].idIniciative,
                        photoUser: comments[comment].photoUser,
                        idUser: comments[comment].idUser,
                        titleIniciative: comments[comment].titleIniciative,
  
                    });
                }
            }
            this.setState({
                comments: newState,
                _statate: true,
            });
        });
    }

    render() {
        return(
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
                        {(this.state.user) ? (
            
                <Row>
                    <h1>My Profile</h1>
                    <div className="card-panel" style={{ marginTop: 40, marginLeft: 20, marginRight: 20 }}>
                        <Row>
                            <Col l={5}>
                                <p><b>Name:</b> {this.state.user.displayName}</p>
                                <p><b>Location:</b> </p>
                                <p><b>Nacionality:</b></p></Col>
                            <Col l={5}>
                                <p><b>Email:</b> {this.state.user.email} </p>
                                <p><b>Reaimining Coins:</b> </p></Col>
                            <Col l={2}>
                                <MediaBox className="responsive-img imageProfile" src={this.state.user.photoURL} caption={this.state.user.displayName} width="300px" /></Col>
                        </Row>
                        <Row>
                            <Col l={4}><div className="card-panel"><p><b>Funded Initiatives: </b>
                            {this.state.contributions.map((contribution, i) => {
                                    return (
                                        <p style={{ textAlign: 'left' }} key={i}>
                                            {i + 1}.- {contribution.titleInitiative} ({contribution.amount} Nisum Coins)
                                            <hr/>
                                        </p>
                                    )
                                })}

                            </p></div></Col>
                            <Col l={4}><div className="card-panel"><p><b>My Initiatives: </b>
                                {this.state.iniciatives.map((iniciative, i) => {
                                    return (
                                        <p style={{ textAlign: 'left' }} key={i}>
                                            {i + 1}.- {iniciative.title}
                                            <hr/>
                                        </p>
                                    )
                                })}
                            </p></div></Col>
                            <Col l={4}><div className="card-panel"><p><b>Comments</b>
                                {this.state.comments.map((comment, i) => {
                                    return (
                                        <p style={{ textAlign: 'left' }} key={i}>
                                            {i + 1}.- Commented on {comment.titleIniciative}: <p style={{ textAlign: 'center' }}><i>"{comment.content}"</i></p>
                                        <hr/>
                                        </p>
                                    )
                                })}
                            </p></div></Col>
                        </Row>
                    </div>
                </Row>

            

                         ):(
            null
                         )
                        }
                        </Row>)}
            </Row>

        )
        
    }
}

export default profile;