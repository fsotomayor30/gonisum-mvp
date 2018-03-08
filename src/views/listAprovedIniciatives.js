import React, { Component } from 'react'
import '../css/content.css'
import { Col, Card, Row, Icon, Input, Collapsible, CollapsibleItem, Collection, CollectionItem, Button } from 'react-materialize'
import firebase from 'firebase'
import Iniciative from '../components/Iniciative'

export default class listAprovedIniciatives extends Component {

    constructor(props) {
        super();
        this.state = {
            iniciatives: [],
            iniciativesFitered: [],
            _statate: false,
        };
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('iniciatives');
        itemsRef.on('value', (snapshot) => {
            let iniciatives = snapshot.val();
            let newState = [];
            for (let iniciative in iniciatives) {
                if (iniciatives[iniciative].state === 'Approved') {
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
                iniciatives: newState,
                iniciativesFiltered: newState,
                _statate: true,
            });
        });
    }

    filterCategory = (cat) => {
        this.setState({
            iniciativesFiltered: this.state.iniciatives.filter(
                (iniciative) => iniciative.categories === cat
            )
        });
    };

    reset = () => {
        this.setState({
            iniciativesFiltered: this.state.iniciatives
        });
    };

    render() {
        return (
            <Row>
                <Col m={4} l={3}>
                    <Card title='Filters'>
                        <div>
                            <Row>
                                <Input s={12} label="Search" validate><Icon>search</Icon></Input>
                            </Row>
                            <Button onClick={this.reset}>Reset</Button>
                            <Collapsible>
                                <CollapsibleItem header='Categories' icon='whatshot'>
                                    <Collection>
                                        <span onClick={() => this.filterCategory("Infrastructure")}>
                                            <CollectionItem href='#'>Infrastructure</CollectionItem>
                                        </span>
                                        <span onClick={() => this.filterCategory("Climate and Culture")}>
                                            <CollectionItem href='#'>Climate and Culture</CollectionItem>
                                        </span>
                                        <span onClick={() => this.filterCategory("Solidarity Fund")}>
                                            <CollectionItem href='#'>Solidarity Fund</CollectionItem>
                                        </span>
                                    </Collection>
                                </CollapsibleItem>
                                <CollapsibleItem header='Status' icon='thumb_up'>
                                    <Collection>
                                        <CollectionItem href='#'>Active</CollectionItem>
                                        <CollectionItem href='#'>Rejected</CollectionItem>
                                        <CollectionItem href='#'>Executed</CollectionItem>
                                    </Collection>
                                </CollapsibleItem>
                            </Collapsible>
                        </div>
                    </Card>
                    <Card title='Orders'>
                        <div>
                            <Collapsible>
                                <CollapsibleItem header='Likes' icon='thumb_up'>
                                    <Collection>
                                        <span onClick={() => {
                                            this.setState({
                                                iniciativesFiltered: this.state.iniciativesFiltered.sort(
                                                    (a, b) => b.like - a.like)
                                            });
                                        }}>
                                            <CollectionItem href='#'>Descending</CollectionItem>
                                        </span>
                                        <span onClick={() => {
                                            this.setState({
                                                iniciativesFiltered: this.state.iniciativesFiltered.reverse(
                                                    (a, b) => b.like - a.like)
                                            });
                                        }}>
                                            <CollectionItem href='#'>Ascending</CollectionItem>
                                        </span>
                                    </Collection>
                                </CollapsibleItem>
                                <CollapsibleItem header='Comments' icon='comments'>
                                    <Collection>
                                        <CollectionItem href='#'>By Higher</CollectionItem>
                                        <CollectionItem href='#'>By Lower</CollectionItem>
                                    </Collection>
                                </CollapsibleItem>
                                <CollapsibleItem header='Backers' icon='supervisor_account'>
                                    <Collection>
                                        <CollectionItem href='#'>By Higher</CollectionItem>
                                        <CollectionItem href='#'>By Lower</CollectionItem>
                                    </Collection>
                                </CollapsibleItem>
                            </Collapsible>
                        </div>
                    </Card>
                </Col>
                <Col m={8} l={9}>
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
                            {this.state.iniciativesFiltered.map((iniciative, i) => {
                                return (
                                    <div key={i}>
                                        <Iniciative initiative={iniciative} />
                                    </div>
                                )
                            })}
                        </Row>)}
                </Col>
            </Row>
        )
    }
}
