import React, { Component } from 'react'
import '../css/content.css'
import { Col, Card, Row , Button, Icon, Input} from 'react-materialize'
import propTypes from 'prop-types'
import firebase from 'firebase'
import Iniciative from '../components/Iniciative'

class listAprovedIniciatives extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
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
            <Row>
                <Col s={3}>
                    <Card  title='Menu'>
                        <div>
                            <Row>
                                <Input s={12} label="Search" validate><Icon>search</Icon></Input> 
                            </Row>
                            <Button waves='light'>button<Icon left>cloud</Icon></Button>
                            <Button waves='light'>button<Icon right>cloud</Icon></Button>
                            <Button waves='light'>button<Icon right>cloud</Icon></Button>
                            <Button waves='light'>button<Icon right>cloud</Icon></Button>
                            <Button waves='light'>button<Icon right>cloud</Icon></Button>
                            <Button waves='light'>button<Icon right>cloud</Icon></Button>
                            <Button waves='light'>button<Icon right>cloud</Icon></Button>
                            <Button waves='light'>button<Icon right>cloud</Icon></Button>
                            <Button waves='light'>button<Icon right>cloud</Icon></Button>

                        </div>
                    </Card>
                </Col>
                <Col s={9}>
                    <Col s={12} m={6}>
                        <Iniciative />
                </Col>
                </Col>
            </Row>
        )
    }
}

export default listAprovedIniciatives;