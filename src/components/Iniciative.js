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
								<img width='100%' src={this.props.initiative.picture} alt="initiative" 
								style={{ paddingTop: 15, borderRadius: 7 }} />
								<Row>
									<span>{this.props.initiative.progressMoney}/{this.props.initiative.moneyMin} </span><Icon small>monetization_on</Icon>
									<ProgressBar progress={70} />
								</Row>
								<Row>
									<span>{this.props.initiative.like}  </span><Icon small>thumb_up</Icon><span>  </span>
									<span>{this.props.initiative.collaborators} </span><Icon small>comment</Icon>
								</Row>
							</Col>
							<Col m={6}>
								<CardPanel className="teal lighten-4 black-text">
									<span>{this.props.initiative.description}</span>
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
