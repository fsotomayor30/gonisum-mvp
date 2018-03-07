import React, { Component } from 'react'
import '../css/content.css'
import { Col, Card, Row, Button, Icon, Input, Collapsible, CollapsibleItem, NavItem, Dropdown, Collection, CollectionItem } from 'react-materialize'
import propTypes from 'prop-types'
import firebase from 'firebase'
import Iniciative from '../components/Iniciative'

export default class listAprovedIniciatives extends Component {

    constructor(props) {
        super(props);
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
                        <Iniciative />
                        <Iniciative />
                        <Iniciative />

                    </Row>
                </Col>
            </Row>
        )
    }
}
