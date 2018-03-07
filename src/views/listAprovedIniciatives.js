import React, { Component } from 'react'
import '../css/content.css'
import { Col, Card, Row, Button, Icon, Input, Collapsible, CollapsibleItem, Collection, CollectionItem } from 'react-materialize'
import firebase from 'firebase'
import Iniciative from '../components/Iniciative'

export default class listAprovedIniciatives extends Component {

    constructor(props) {
        super();
        this.state = {
            iniciatives: [],
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
                iniciatives: newState
            });
        });
    }

    render() {
        return (
            <Row>
                <Col m={4} l={3}>
                    <Card title='Filters'>
                        <div>
                            <Row>
                                <Input s={12} label="Search" validate><Icon>search</Icon></Input>
                            </Row>
                            <Collapsible>
                                <CollapsibleItem header='Categories' icon='whatshot'>
                                    <Collection>
                                        <CollectionItem href='#'>Alvin</CollectionItem>
                                        <CollectionItem href='#'>Alvin</CollectionItem>
                                        <CollectionItem href='#'>Alvin</CollectionItem>
                                    </Collection>
                                </CollapsibleItem>
                                <CollapsibleItem header='Likes' icon='thumb_up'>
                                    <Collection>
                                        <CollectionItem href='#'>Alvin</CollectionItem>
                                        <CollectionItem href='#'>Alvin</CollectionItem>
                                    </Collection>
                                </CollapsibleItem>
                                <CollapsibleItem header='Categories' icon='whatshot'>
                                    <Collection>
                                        <CollectionItem href='#'>Alvin</CollectionItem>
                                        <CollectionItem href='#'>Alvin</CollectionItem>
                                        <CollectionItem href='#'>Alvin</CollectionItem>
                                    </Collection>
                                </CollapsibleItem>
                            </Collapsible>
                            <Button waves='light'>button<Icon right>cloud</Icon></Button>
                        </div>
                    </Card>
                </Col>
                <Col m={8} l={9}>
                    <Row>
                        {this.state.iniciatives.map((iniciative, i) => {
                            return (
                                <div key={i}>
                                    <Iniciative initiative={iniciative} />
                                </div>
                            )
                        })}
                    </Row>
                </Col>
            </Row>
        )
    }
}
