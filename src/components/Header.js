import React, { Component } from 'react';
import { Navbar, NavItem} from 'react-materialize';
import firebase from 'firebase';
import '../css/header.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
        this.handleAuth = this.handleAuth.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

    }

    handleAuth(e) {
        e.preventDefault();
        e.stopPropagation();
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => console.log(`${result.user.email} ha iniciado sesion`)
            );
    }
    componentDidMount() {

    }

    handleLogout(e) {
        e.preventDefault();
        e.stopPropagation();
        firebase.auth().signOut()
        window.location.href = '/'
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
        if (this.state.user) {
            return (
                <Navbar style={{ backgroundColor: 'rgb(73, 171, 210)' }}>
                    <NavItem href='/'>goNisum</NavItem>                    
                    <NavItem href="/profile" style={{ float: 'right'}}>{this.state.user.displayName}
                    <img id="image" src={this.state.user.photoURL}
                        className="image-user"
                        alt={this.state.user.displayName}/>
                    </NavItem>
                    <NavItem onClick={this.handleLogout} style={{ float: 'right'}}>Logout</NavItem>
                    <NavItem href='/iniciatives' style={{ float: 'right'}}>Iniciatives</NavItem>
                    <NavItem href='/myiniciatives' style={{ float: 'right' }}>My Iniciatives</NavItem>
                </Navbar>
            )
        } else {
            return (
                <Navbar style={{ backgroundColor: 'rgb(73, 171, 210)' }}>
                    <NavItem href='/'>goNisum</NavItem>
                    <NavItem onClick={this.handleAuth} style={{ float: 'right', marginRight: 20 }}>Login</NavItem>

                </Navbar>
            )
        }
    }
}
export default Header;
