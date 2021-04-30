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
        <h2>All Staff</h2>
        {this.state.staffs.map((staff, index) => {
          // loop though all staff
          return (
            <section>
              <div id="stafflist">

                <span>Staff Name: {staff.fullname}</span>
                <br></br>
                <span>Hourly Rate: {staff.hourlyrate}</span>
                <br></br>
                <span>Position: {staff.position}</span>
                <br></br>
                <span>
                  Assigned Pets:
                  {staff.Pets ? staff.Pets.map((pet) => {
										return <span> {pet}, </span>
									}): 'No Pets Assigned'}
                </span>
                <br></br>

                <span>Fulltime: {staff.fulltime ? "Yes" : "No"}</span>
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

export default Staff
