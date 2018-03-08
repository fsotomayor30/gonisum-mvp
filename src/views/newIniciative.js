import React, { Component } from 'react';
import '../css/content.css';
import firebase from 'firebase';
import { Row, Input } from 'react-materialize';

class newIniciative extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: '',
            categories: 'Infrastructure',
            moneyMin: 0,
            moneyMax: 0,
            description: '',
            collaborators: '',
            participantMin: 0,
            participantMax: 0,
            uploadValue: 0,
            picture: null,
            date: '',
            like: 0,
            photoUser: '',
            progressMoney: 0,
            state: 'not reviewed',
            user: null
        };
        this.handleUpload = this.handleUpload.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleUpload(event) {
        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`/iniciatives/${file.name}`);
        const task = storageRef.put(file);
        task.on('state_changed', snapshot => {
            let percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.setState({
                uploadValue: percent
            })
        }, error => {
            console.log(error.message)
        }, () => {
            this.setState({
                uploadValue: 100,
                picture: task.snapshot.downloadURL
            })
        });
    }

    handleSave() {
        if (this.state.user) {
            if (this.state.title === '' ||
                this.state.categories === '' ||
                this.state.moneyMin === 0 ||
                this.state.moneyMax === 0 ||
                this.state.description === '' ||
                this.state.picture === null) {
                alert("there can not be empty fields");
            } else {
                const record = {
                    description: this.state.description,
                    title: this.state.title,
                    categories: this.state.categories,
                    moneyMax: parseInt(this.state.moneyMax, 10),
                    moneyMin: parseInt(this.state.moneyMin, 10),
                    collaborators: this.state.collaborators,
                    participantMin: parseInt(this.state.participantMin, 10),
                    participantMax: parseInt(this.state.participantMax, 10),
                    picture: this.state.picture,
                    userId: this.state.user.uid,
                    date: this.state.date,
                    state: this.state.state,
                    like: this.state.like,
                    progressMoney: this.state.progressMoney,
                    photoUser: this.state.user.photoURL,
                    displayUser: this.state.user.displayName,
                    commentCommittee: '',
                };

                const dbRef = firebase.database().ref('iniciatives');
                const newIniciative = dbRef.push();
                newIniciative.set(record);


                this.setState({
                    title: '',
                    categories: '',
                    moneyMin: 0,
                    moneyMax: 0,
                    collaborators: '',
                    participantMax: 0,
                    participantMin: 0,
                    date: '',
                    description: '',
                    uploadValue: 0,
                    picture: null,
                });
            }
        }
        alert("Added correctly");

    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        });
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
            <div className="card-panel" style={{ marginTop: 40, marginLeft: 20, marginRight: 20 }}>
                <form>

                    <Row>
                        <Input
                            icon="title"
                            label="Title"
                            value={this.state.title}
                            s={7}
                            onChange={this.handleInputChange}
                            name="title"
                            id="title" />
                        <Input
                            style={{ textAlign: 'center' }}
                            s={5}
                            type='select'
                            label="Category:"
                            value={this.state.categories}
                            onChange={this.handleInputChange}
                            name="categories">
                            <option value="infrastructure">Infrastructure</option>
                            <option value="Climate and Culture">Climate and Culture</option>
                            <option value="Solidarity fund">Solidarity fund</option>
                        </Input>
                    </Row>

                    <Row>
                        <Input
                            icon="attach_money"
                            label="Money Min:"
                            s={6}
                            onChange={this.handleInputChange}
                            name="moneyMin"
                            value={this.state.moneyMin}
                            id="moneyMin" type="number"
                            className="form-control"
                            required="required" />

                        <Input
                            icon="attach_money"
                            label="Money Max:"
                            s={6}
                            value={this.state.moneyMax}
                            onChange={this.handleInputChange}
                            name="moneyMax"
                            id="moneyMax" type="number"
                            className="form-control"
                            required="required" />

                    </Row>
                    <Row>
                        <Input label="Description:"
                            s={12}
                            icon="description"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            style={{ resize: 'none' }}
                            className="form-control"
                            name="description"
                            id="description"
                            cols="30"
                            rows="10"
                            required="required" />
                    </Row>
                    <Row>
                        <Input
                            icon="group_add"
                            label="Collaborators:"
                            value={this.state.collaborators}
                            s={6}
                            onChange={this.handleInputChange}
                            name="collaborators"
                            id="collaborators" />

                        <Input
                            icon="date_range"
                            s={6}
                            label="Date:"
                            name='date'
                            type='date'
                            value={this.state.date}
                            onChange={this.handleInputChange} />

                    </Row>

                    <Row>
                        <Input
                            icon="group"
                            label="Participant Min:"
                            s={6}
                            value={this.state.participantMin}
                            onChange={this.handleInputChange}
                            name="participantMin"
                            id="participantMin" type="number"
                            className="form-control"
                            required="required" />

                        <Input
                            icon="group"
                            label="Participant Max:"
                            s={6}
                            value={this.state.participantMax}
                            onChange={this.handleInputChange}
                            name="participantMax"
                            id="participantMax" type="number"
                            className="form-control"
                            required="required" />

                    </Row>


                    <progress style={{ width: '100%' }} value={this.state.uploadValue} max="100"></progress>
                    <div style={{ width: '100%', paddingTop: 20 }}>
                        <Row>
                            <div className="file-field input-field">
                                <div className="btn">
                                    <i className="material-icons">add_to_photos</i>  Image
                                <input type="file"
                                        onChange={this.handleUpload}
                                        name="file"
                                        id="file"
                                        required="required" />
                                </div>

                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" />
                                </div>
                            </div>

                        </Row>

                        <center>
                            <img
                                style={{ marginTop: 10 }}
                                width="320"
                                alt=""
                                src={this.state.picture} />
                        </center>
                    </div>
                </form>
                <center>
                    <button onClick={this.handleSave} className="btn btn-primary" style={{ marginTop: 10 }} type="submit"><i className="material-icons">send</i>  Send </button>
                </center>

            </div>


        );

    }
}

export default newIniciative;