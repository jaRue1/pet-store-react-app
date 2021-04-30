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
                {this.state.pets.map((pet, index) => { // loop though all pets
						return (
							<li key={pet.id}>
								<div>
									<h3>{pet.name}</h3>
                                    {/* Add pet jsx here */}
								</div>
                                {/* and here */}

							</li>
						)
					})}
			</Fragment>
		)
	}
}

export default Pets