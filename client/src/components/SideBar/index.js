import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, AlienIcon,AddAlienIcon,MeIcon, AboutIcon, LogoutIcon } from './SidebarElement';

const SideBar = ({isOpen, toggle}) => {

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}> 
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/"> <AlienIcon /> People </SidebarLink>
                    <SidebarLink to="/add-person"> <AddAlienIcon /> Add Person </SidebarLink>
                    <SidebarLink to="/my-profile"> <MeIcon /> Me </SidebarLink>
                    <SidebarLink to="/about"> <AboutIcon /> About </SidebarLink>
                    <SidebarLink to="/login"> <LogoutIcon />  Log out</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar
