import React, { Component } from 'react';

import { Row, Card, Chip, CardPanel, Col, MediaBox, Collection, CollectionItem, Icon, ProgressBar} from 'react-materialize';
import '../css/content.css';


class Iniciatives extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            
              
                <CollectionItem href={"/detailIniciativeCommittee/"+this.props.id}>
                  <h5>{this.props.title}</h5>
                  <hr/>
                  <Chip>
                    <img src={this.props.photoUser}  />
                    {this.props.displayUser}
                      </Chip>
                  <Row>
                    <Col m={6}>
                      <img width='100%' src={this.props.picture} alt="image" style={{paddingTop:15, borderRadius:7}} />
                      <Row>
                        <span>Min: {this.props.moneyMin} </span>
                        <span>Max: {this.props.moneyMax} </span><Icon small>monetization_on</Icon>
                      </Row>

      
                    </Col>
                    <Col m={6}>
                      <CardPanel className="teal lighten-4 black-text">
                        <span>{this.props.description}</span>
                      </CardPanel>
                    </Col>
                  </Row>
      
                </CollectionItem>
              
            
          )

       
    }
}





export default Iniciatives
