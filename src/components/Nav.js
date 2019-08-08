import React from 'react'
import { NavLink } from 'react-router-dom'; 

function Nav() {
	return (
		<div>
				<ul>
					<li>
						<NavLink exact to='/' activeClassName='active-link'>Home</NavLink>
					</li>
				</ul>
		</div>
  )
}
export default Nav;