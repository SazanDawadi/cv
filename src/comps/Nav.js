import {React, useState}from 'react';
import './css/nav.css'

import {BiHomeAlt} from 'react-icons/bi';
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi';
import {BiReceipt} from 'react-icons/bi';
import {HiOutlineBriefcase} from 'react-icons/hi';
import {BsPen} from 'react-icons/bs'
import {RiShareForwardBoxLine} from 'react-icons/ri'
import {BsGrid ,BsGridFill} from 'react-icons/bs'

const Nav = () => {

    const [showMenu ,setShowMenu] = useState(false);
    const [activeLink, setActiveLink] = useState(0);

    const handelClick = (link_num) =>{
        setShowMenu(false);
        setActiveLink(link_num);
    }
    return (
        <nav className = "nav bd-container">
            <a href = "#body" className ="nav__logo" >Sajan</a>

            {showMenu && (<div className = "nav__menu" id = "nav-menu">
                <ul className = "nav__list">
                    <li className = "nav__item" onClick ={() => handelClick(0)}>
                        <a href = "#body" className = {activeLink ===0?"nav__link active-link":"nav__link"}>
                            <BiHomeAlt className = "nav__icon" />Home
                        </a>
                    </li>


                    <li className = "nav__item" onClick ={() => handelClick(1)}>
                        <a href = "#profile" className = {activeLink === 1?"nav__link active-link":"nav__link"}>
                            <AiOutlineUser className = "nav__icon" />Profile
                        </a>
                    </li>


                    <li className = "nav__item" onClick ={() => handelClick(2)}>
                        <a href = "#education" className = {activeLink === 2?"nav__link active-link":"nav__link"}>
                            <BiBook className = "nav__icon" />Education
                        </a>
                    </li>

                    <li className = "nav__item" onClick ={() => handelClick(3)}> 
                        <a href = "#skills" className = {activeLink === 3?"nav__link active-link":"nav__link"}>
                            <BiReceipt className = "nav__icon" />Skills
                        </a>
                    </li>


                    <li className = "nav__item" onClick ={() => handelClick(4)}>
                        <a href = "#experience" className ={activeLink === 4?"nav__link active-link":"nav__link"}>
                            <HiOutlineBriefcase className = "nav__icon" />Experience
                        </a>
                    </li>

                    <li className = "nav__item" onClick ={() => handelClick(5)}>
                        <a href = "#projects" className = {activeLink === 5?"nav__link active-link":"nav__link"}>
                            <BsPen className = "nav__icon" />Projects
                        </a>
                    </li>

                    <li className = "nav__item" onClick ={() => handelClick(6)}>
                        <a href = "#references" className ={activeLink === 6?"nav__link active-link":"nav__link"}>
                            <RiShareForwardBoxLine className = "nav__icon" />References
                        </a>
                    </li>

                </ul>
            </div> 
            )}

            <div className = "nav__toggle" id = "nav-toggle">
                {!showMenu && (<BsGrid onClick = {() => setShowMenu(!showMenu)} className = "icon__grid" />
                )}

                {showMenu && (<BsGridFill onClick = {() => setShowMenu(!showMenu)} className = "icon__grid" />
                )}
            </div>

            
        </nav>
    )
}

export default Nav
