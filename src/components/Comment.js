import React, { Component } from 'react';
import '../css/content.css';
import { Col, Row, Chip } from 'react-materialize'
class Comment extends Component {

    render() {
        return (
            <div>
            <Row>
                <Col l={12}>
                    <Chip>
                        <img src={this.props.photoUser} alt='Person' />
                        {this.props.displayUser}
                    </Chip>
                </Col>
            </Row>
            <Row>
                <Col l={12}>
                    <pre style={{ textAlign: 'left' }}> {this.props.content}</pre>
                </Col>
            </Row>
            </div>
        );
    };
}


export default Comment