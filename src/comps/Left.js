import React, { useState } from 'react';
import './css/left.css';
import Img1 from './img/img4.png'

import {BiMap} from 'react-icons/bi';
import {BiEnvelope} from 'react-icons/bi';
import {FiPhone} from 'react-icons/fi'
import {IoMoonOutline} from 'react-icons/io5'
import {FiSun} from "react-icons/fi";
import {BsDownload} from "react-icons/bs"

import Social from './Social';
import EducationAndSkill from './EducationAndSkill';
import cv from "./pdf/cv.pdf"

export const Left = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    const themeHandler = (status) => {
        setDarkTheme(!darkTheme);
        
        if(status === true){
            document.body.classList.add("dark-theme");
        }

        if(status === false){
            document.body.classList.remove("dark-theme");
        }
    }
    return (
        <div>
            <div className = "resume-left">
                <section className = "home" id = "home">
                    <div className = "home__container section bd-grid">
                        <div className = "home__data bd-grid">
                            <img src= {Img1} alt = "" className = "home__img" />
                            <h1 className = "home__title">SAJAN <b>DAWADI</b></h1>
                            <h3 className = "home__profession">Web Developer</h3>

                            <div>
                                <a download = "" href = {cv} className = "home__button-mobile" >Download CV</a>
                            </div>
                            
                        </div>
                        <div className = "home__address bd-grid">
                            <span className = "home__information">
                                <BiMap className = "home__icon" />Kathmandu, Nepal
                            </span>

                            <span className = "home__information">
                                <BiEnvelope className = "home__icon" />sajandawadi5@gmail.com
                            </span>

                            <span className = "home__information">
                                <FiPhone className = "home__icon" />+977 9861-292-194
                            </span>

                        </div>

                    </div>
                    {darkTheme && <FiSun onClick = {() =>themeHandler(!darkTheme)} className = "change-theme" />}
                    {!darkTheme &&<IoMoonOutline onClick = {() =>themeHandler(!darkTheme)} className = "change-theme" />}

                    <a download = "" href = {cv}><BsDownload className = "generate-pdf"  title = "Download PDF" id = "resume-button"/></a>

                </section>
                <Social />
                <EducationAndSkill /> 
            </div>


        </div>
        
    )
}

export default Left