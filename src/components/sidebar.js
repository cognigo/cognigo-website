import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import logo from './../pic.jpeg';
import './../App.css';
import {SidebarData} from './sidebarData'
import SubMenu from './subMenu'

const Nav = styled.div`
    background: #15171c;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const Rotate = styled.img`
    margin-left: 89%;
    displkay: flex;
    justify-content: flex-end;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    displkay: flex;
    justify-content: center;
    position: fixed;
    top:0;
    left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;
const Sidebar = () => {

    const [sidebar, setSidebar]  = useState(false)
    const showSidebasr = () => setSidebar(!sidebar)
    return (
        <>
            <Nav>                
                <NavIcon to='#'>
                    <FaIcons.FaBars onClick={showSidebasr}/>
                </NavIcon>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to='#'>
                            <AiIcons.AiOutlineClose onClick={showSidebasr}/>
                        </NavIcon>
                        {SidebarData.map((item,index)=>{
                            return <SubMenu item={item} key={index} />;
                        })}
                    </SidebarWrap>
                </SidebarNav>
                <Rotate src={logo} className="App-logo" alt="logo" />
            </Nav>
        </>
    );
};

export default Sidebar
