import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
	return (
		<nav>
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

