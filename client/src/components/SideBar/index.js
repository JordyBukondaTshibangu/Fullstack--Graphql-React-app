import React from 'react'
import { useHistory } from 'react-router-dom'
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SidebarButton,
	AlienIcon,
	AddAlienIcon,
	MeIcon,
	AboutIcon,
	LogoutIcon,
} from './SidebarElement'

const SideBar = ({ isOpen, toggle }) => {
    const history = useHistory()
	const handleLoggout = () => {
		localStorage.clear()
        history.push('/login')
	}
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to='/'>
						{' '}
						<AlienIcon /> People{' '}
					</SidebarLink>
					<SidebarLink to='/add-person'>
						{' '}
						<AddAlienIcon /> Add Person{' '}
					</SidebarLink>
					<SidebarLink to='/my-profile'>
						{' '}
						<MeIcon /> Me{' '}
					</SidebarLink>
					<SidebarLink to='/about'>
						{' '}
						<AboutIcon /> About{' '}
					</SidebarLink>
					<SidebarLink to='/login'>
						{' '}
						<SidebarButton onClick={handleLoggout}>
							<LogoutIcon /> Log out
						</SidebarButton>
					</SidebarLink>
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	)
}

export default SideBar
