import React, { Component, Fragment, useState } from "react"

class Staff extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      staffs: [],
    }
  }
  componentDidMount() {
    fetch("https://petstore-api-bc.web.app/staffs") // api link to get all Staff
      .then((resp) => resp.json())
      .then((dataRecieved) => this.setState({ staffs: dataRecieved }))
      .catch((err) => console.log("Error fetching Staffs", err.message))
  }

  render() {
    console.log(this.state.staffs)

    return (
      <Fragment>
        <h2 id= "staff-title">All Staff</h2>
        {this.state.staffs.map((staff, index) => {
          // loop though all staff
          return (
            <section id= "testclass" className="stafflist" key={index}>
              <div className = 'card' >
                <img src="/img/images.jpeg" alt="Man Image"/><br/>
                <strong><span>Staff Name: {staff.fullname}</span></strong>
                <span>Hourly Rate: {staff.hourlyrate}</span>
                <span>Position: {staff.position}</span>
                <span>Assigned Pets: {staff.Pets ? staff.Pets.map((pet) => {
										return <span> {pet},</span>
									}): 'No Pets Assigned'}
                   </span>
                <span>Fulltime: {staff.fulltime ? "Yes" : "No"}</span>
              </div>
            </section>
          )
        })}
      </Fragment>
    )
  }
}

export default Staff
