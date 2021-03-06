import React, { Component } from 'react'
import { Collection, CollectionItem, Col, Row, CardPanel, ProgressBar, Icon, Chip } from 'react-materialize'

export default class Initiative extends Component {
	render() {
		return (
			<Col s={12} l={6}>
				<Collection>
					<CollectionItem href={'/detailIniciative/' + this.props.initiative.id}>
						<h5> {this.props.initiative.title}</h5>
						<hr />
						<Chip>
							<img src={this.props.initiative.photoUser} alt='Person' />
							{this.props.initiative.displayUser}
						</Chip>
						<Row>
							<Col m={6}>
								<img  src={this.props.initiative.picture} alt="initiative" 
								style={{  width: 150, height: 150,paddingTop: 15, borderRadius: 7 }} />
								<Row>
									<span>{this.props.initiative.progressMoney}/{this.props.initiative.moneyMin} </span><Icon small>monetization_on</Icon>
									<ProgressBar progress={(this.props.initiative.progressMoney / this.props.initiative.moneyMin) * 100} />
								</Row>
								<Row>
									<span>{this.props.initiative.like}  </span><Icon small>thumb_up</Icon><span>  </span>
									<span>{this.props.initiative.collaborators} </span><Icon small>comment</Icon>
								</Row>
							</Col>
							<Col m={6}>
								<CardPanel className="teal lighten-4 black-text">
									<span>{this.props.initiative.description.substring(0,150)+'...'}</span>
								</CardPanel>
							</Col>
							<span>Backers: {this.props.initiative.collaborators} <Icon>supervisor_account</Icon></span>
						</Row>
					</CollectionItem>
				</Collection>
			</Col>
		)
	}
}
