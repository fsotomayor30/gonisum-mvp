import React, { Component } from 'react';
import './css/content.css';
import propTypes from 'prop-types';
import firebase from 'firebase';

class stages extends Component {


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
    
    if(this.state.user){
        return (
      <div className="row" style={{marginTop: 70}}>
     <div className="col offset-l1"></div>
        <div className=" col l3">
        <div className="card">
            <div className="card-image">
              <img src="https://image.freepik.com/vector-gratis/hombre-de-negocios-con-una-gran-idea_1012-219.jpg"/>
              
            </div>
            <div className="card-content">
            <span className="card-title" style={{color: 'black'}}>Propose Iniciative</span>
            </div>
            <div className="card-action">
              <a href="#">Create an Iniciative</a>
            </div>
          </div>
        </div>
        
        <div className=" col l3">
        <div className="card">
            <div className="card-image">
              <img src="https://media.wired.com/photos/5955b36196d7ef123a1d4273/master/w_1800,c_limit/529386299green-F-TOP-ART.jpg"/>
              
            </div>
            <div className="card-content">
            <span className="card-title" style={{color: 'black'}} >Invest in an Iniciative</span>
            </div>
            <div className="card-action">
              <a href="#">Explore new iniciatives</a>
            </div>
          </div>
        </div>
        
        <div className=" col l3">
        <div className="card">
            <div className="card-image">
              <img src="http://tamgroup-ye.com/wp-content/uploads/2016/12/Success-group-award-590x260.jpg"/>
              
            </div>
            <div className="card-content">
            <span className="card-title" style={{color: 'black'}}>Shared result</span>
            </div>
            <div className="card-action">
              <a href="#">See successful iniciatives</a>
            </div>
          </div>
        </div>
      
      </div>
      );
    }else{
        return (
      <div className="row" style={{marginTop: 70}}>
     <div className="col offset-l1"></div>
        <div className=" col l3">
        <div className="card">
            <div className="card-image">
              <img src="https://image.freepik.com/vector-gratis/hombre-de-negocios-con-una-gran-idea_1012-219.jpg"/>
              
            </div>
            <div className="card-content">
            <span className="card-title" style={{color: 'black'}}>Propose Iniciative</span>
            </div>
            
          </div>
        </div>
        
        <div className=" col l3">
        <div className="card">
            <div className="card-image">
              <img src="https://media.wired.com/photos/5955b36196d7ef123a1d4273/master/w_1800,c_limit/529386299green-F-TOP-ART.jpg"/>
              
            </div>
            <div className="card-content">
            <span className="card-title" style={{color: 'black'}} >Invest in an Iniciative</span>
            </div>
            
          </div>
        </div>
        
        <div className=" col l3">
        <div className="card">
            <div className="card-image">
              <img src="http://tamgroup-ye.com/wp-content/uploads/2016/12/Success-group-award-590x260.jpg"/>
              
            </div>
            <div className="card-content">
            <span className="card-title" style={{color: 'black'}}>Shared result</span>
            </div>
            
          </div>
        </div>
      
      </div>
      );
    }
  }
}

  export default stages;