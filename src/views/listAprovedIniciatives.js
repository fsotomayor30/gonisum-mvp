import React, { Component } from 'react'
import '../css/content.css'
import { Col, Card, Row, Button, Icon, Input, Collapsible, CollapsibleItem } from 'react-materialize'
import propTypes from 'prop-types'
import firebase from 'firebase'
import Iniciative from '../components/Iniciative'

export default class listAprovedIniciatives extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
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
                                    <Button waves='light'>button<Icon right>cloud</Icon></Button>
                                    <Button waves='light'>button<Icon right>cloud</Icon></Button>
                                    <Button waves='light'>button<Icon right>cloud</Icon></Button>
                                </CollapsibleItem>
                            </Collapsible>
                            <Button waves='light'>button<Icon right>cloud</Icon></Button>
                            <Button waves='light'>button<Icon right>cloud</Icon></Button>
                            <Button waves='light'>button<Icon right>cloud</Icon></Button>
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
