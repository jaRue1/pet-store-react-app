
import React, { Component, Fragment, useState } from 'react'

class Staff extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			staffs: [],
		}
	}
	componentDidMount() {
		fetch('https://petstore-api-bc.web.app/staffs') // api link to get all Staff
			.then((resp) => resp.json())
			.then((dataRecieved) => this.setState({ staffs: dataRecieved }))
			.catch((err) => console.log('Error fetching Staffs', err.message))
	}

	render() {
		console.log(this.state.staffs)

		return (
			<Fragment>
                {this.state.staffs.map((staff, index) => { // loop though all staff
						return (
							<li key={index}>
								<div>
									<span>{staff.fullname}</span>
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

export default Staff