import React, { Component } from 'react';

import { Row, Card, Chip, CardPanel, Col, MediaBox} from 'react-materialize';
import '../css/content.css';


class Iniciatives extends Component {
    constructor(props) {
        super(props);
        this.checkIniciative = this.checkIniciative.bind(this);
    }

    checkIniciative = () => {
        window.location = '/detailIniciativeCommittee/' + this.props.id;
    }

    render() {

        return (
            <Card style={{ marginTop: 40, marginLeft: 20, marginRight: 20 }}>

                <Row>
                    <Col l={3}>
                        <MediaBox style={{ marginTop: '30%' }} className="responsive-img" src={this.props.picture} caption="A demo media box1" width="300px" />
                    </Col>
                    <Col l={9}>
                        <Row>
                        <Row><Col l={12}><Chip>
                                <img src={this.props.photoUser} alt='Contact Person' />
                                {this.props.displayUser}
                            </Chip></Col></Row>
                            <Row>
                                <Col l={6}>
                                    <CardPanel className="teal lighten-4 black-text">
                                        <p style={{ textAlign: "justify" }}><i className="material-icons small">title</i>Title: {this.props.title}</p>
                                        <p style={{ textAlign: "justify" }}><i className="material-icons small">list</i>Category: {this.props.category}</p>
                                    </CardPanel>
                                </Col>
                                <Col l={6} >
                                    <CardPanel className="teal lighten-4 black-text">
                                        <p style={{ textAlign: "justify" }}><i className="material-icons small">supervisor_account</i>Participant Min: {this.props.participantMin}</p>
                                        <p style={{ textAlign: "justify" }}><i className="material-icons small">attach_money</i>Money Min: {this.props.moneyMin}</p>

                                    </CardPanel>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col l={12}>
                                    <CardPanel className="teal lighten-4 black-text"><pre style={{ textAlign: "justify" }}><i className="material-icons small">description</i>Description: {this.props.description}</pre></CardPanel>
                                </Col>
                            </Row>
                        </Row>
                    </Col>

                </Row>
                <center>
                    <button
                        type="button"
                        style={{ marginLeft: 5 }}
                        onClick={this.checkIniciative}
                        className="btn btn-success"><i className="material-icons">add_circle_outline</i> Check</button>
                </center>
                <br />

            </Card>
        );
    }
}





export default Iniciatives
