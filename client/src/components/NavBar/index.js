import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import {
	Nav,
	NavContainer,
	NavLogoContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLink,
	NavButton,
	AlienIcon,
	AddAlienIcon,
	AboutIcon,
	MeIcon,
	LogoutIcon,
} from './NavbarElement'

const Navbar = ({ toggle }) => {
	const history = useHistory()
	const handleLoggout = () => {
		localStorage.clear()
		history.push('/login')
	}
	return (
		<>
			<Nav>
				<NavContainer>
					<NavLogoContainer>
						<NavLogo to='/' id='nav-bar'>
							The star wars
						</NavLogo>
					</NavLogoContainer>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLink to='/' id='nav-item-home'>
								<AlienIcon />
								People
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/add-person' id='nav-item-home'>
								<AddAlienIcon />
								add Person
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/about' id='nav-item-about'>
								<AboutIcon />
								About
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/my-profile' id='nav-item-about'>
								<MeIcon />
								Me
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/login' id='nav-item-aÍbout'>
								<NavButton onClick={handleLoggout}>
									<LogoutIcon />
									Logout
								</NavButton>
							</NavLink>
						</NavItem>
					</NavMenu>
				</NavContainer>
			</Nav>
		</>
	)
}

export default Navbar
