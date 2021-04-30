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
							<section className ="" key={index}>
              <div>
                <span> Name: {pet.name}</span>
                <br></br>
                <span> Type: {pet.type}</span>
                <br></br>
                <span> Age: {pet.age}</span>
                <br></br>
                <span>Breed: {pet.breed}</span>
                <br></br>
                <span>Food: {pet.food}</span>
                <br></br>
                <p></p>
              </div>
              {/* and here */}
            </section>
						)
					})}
			</Fragment>
		)
	}
}

export default Pets
