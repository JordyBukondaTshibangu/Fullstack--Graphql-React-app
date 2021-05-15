import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Navbar from '../components/NavBar'
import SideBar from '../components/SideBar'

const ProtectedRoute = ({ component: Component, ...rest }) => {

	const user = JSON.parse(localStorage.getItem('user'))
	const token = JSON.parse(localStorage.getItem('token'))

	const isAuth = token
	const [isOpen, setOpen] = useState(false)
	const toggle = () => {
		setOpen(!isOpen)
	}

	return (
		<Route
			{...rest}
			render={(props) => {
				if (isAuth) {
					return (
						<>
							<Navbar toggle={toggle} />
							<SideBar isOpen={isOpen} toggle={toggle} />
							<Component {...rest} {...props} user={user}/>
						</>
					)
				} else {
					return (
						<Redirect
							to={{
								pathname: '/unauthorized',
								state: props.location,
							}}
						/>
					)
				}
			}}
		/>
	)
}

export default ProtectedRoute
