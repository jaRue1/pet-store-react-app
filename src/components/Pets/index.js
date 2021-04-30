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
				<h2>All Pets </h2>
                {this.state.pets.map((pet, index) => { // loop though all pets
						return (
							<section className ="allpets" key={index}>
              <div className = "petcard" >
								<div >
									<strong><span> Name: {pet.name} </span></strong>
									<span> Type: {pet.type} </span>
									<span> Age: {pet.age} </span>
									<span>Breed: {pet.breed} </span>
									<span>Food: {pet.food}</span>
									<br></br>
									<p></p>
								</div>
              </div>
            </section>
						)
					})}
			</Fragment>
		)
	}
}

export default Pets
