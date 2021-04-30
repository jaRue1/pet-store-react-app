import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
	return (
		<nav>
        <img src='https://media3.giphy.com/media/J1GGJmqOk8DcpCyACR/giphy.gif?cid=790b7611f506ecc12693cdd557f5c5e18afafd7f2078f358&rid=giphy.gif&ct=s'/>
        <h1>Welcome</h1>
			<NavLink exact to="/staffs">
				Staff
			</NavLink>
			<NavLink exact to="/pets">
				Pets
			</NavLink>
		</nav>
	)
}
export default Header

