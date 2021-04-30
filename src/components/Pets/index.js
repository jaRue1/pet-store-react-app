import React, { Component, Fragment, useState } from 'react'

class Pets extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			pets: [],
		}
	}
	componentDidMount() {
		fetch('https://petstore-api-bc.web.app/pets') // api link to get all pets
			.then((resp) => resp.json())
			.then((dataRecieved) => this.setState({ pets: dataRecieved }))
			.catch((err) => console.log('Error fetching Pets', err.message))
	}

	render() {
		console.log(this.state.pets)

		return (
			<Fragment>
				<h2>All Pets</h2>
				{this.state.pets.map((pet, index) => {
					// loop though all pets
					return (
						<section>
							<div id="petslist">
								<span>Pet Name: {pet.name}</span>
								<br></br>
								<span>Hourly Rate: {pet.hourlyrate}</span>
								<br></br>
								<span>Position: {pet.position}</span>
								<br></br>

								<br></br>

								<span>Fulltime: {pet.fulltime ? 'Yes' : 'No'}</span>
								<p></p>
							</div>
						</section>
					)
				})}
			</Fragment>
		)
	}
}

export default Pets
