import React, { Component } from 'react';
import '../css/content.css';
import firebase from 'firebase';
import IniciateCommittee from '../components/IniciativeCommittee'

class listCommitteeIniciatives extends Component {


    constructor(props) {
        super(props);
        this.state = {
            user: null,
            iniciatives:[],
        };
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('iniciatives');
        itemsRef.on('value', (snapshot) => {
            let iniciatives = snapshot.val();
            let newState = [];
            for (let iniciative in iniciatives) {
                if (iniciatives[iniciative].approved==='not reviewed') {
                  newState.push({
                      id: iniciative,
                      title: iniciatives[iniciative].title,
                      description: iniciatives[iniciative].description,
                      categories: iniciatives[iniciative].categories,
                      moneyMax: iniciatives[iniciative].moneyMax,
                      moneyMin: iniciatives[iniciative].moneyMin,
                      collaborators:iniciatives[iniciative].collaborators,
                      participantMin: iniciatives[iniciative].participantMin,
                      participantMax:iniciatives[iniciative].participantMax,
                      picture: iniciatives[iniciative].picture,
                      userId: iniciatives[iniciative].userId,
                      date: iniciatives[iniciative].date,
                      approved:iniciatives[iniciative].approved,
                      like:iniciatives[iniciative].like,
                      progressMoney:iniciatives[iniciative].progressMoney,
                      photoUser:iniciatives[iniciative].photoUser,
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
        return (
            <div className="Iniciatives">
            {this.state.iniciatives.map((iniciative, i) => {
                return (
                    <div key={i}>
                        <IniciateCommittee title={iniciative.title} picture={iniciative.picture}
                          category={iniciative.categories} photoUser={iniciative.photoUser} displayUser={iniciative.displayUser}
                          userId={iniciative.userId} description={iniciative.description}
                          participantMin={iniciative.participantMin} participantMax={iniciative.participantMin}
                          collaborators={iniciative.collaborators}
                          moneyMax={iniciative.moneyMax} moneyMin={iniciative.moneyMin}
                          approved={iniciative.approved} id={iniciative.id}></IniciateCommittee>
                    </div>
                )
            })}
        </div>

        )

    }
}

export default listCommitteeIniciatives;