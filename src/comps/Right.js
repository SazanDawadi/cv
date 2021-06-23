import React from 'react';
import "./css/right.css";

import {AiFillGithub} from 'react-icons/ai';
import {BiHeadphone} from "react-icons/bi"
import {FaHiking} from "react-icons/fa";
import {ImBook} from "react-icons/im"
import {BiDumbbell} from "react-icons/bi"

const Right = () => {
    return (
        <div className = "resume-right">
            <section className = "experience section" id = "experience">
                <h2 className = "section-title">Experience</h2>

                <div className = "experience__container bd-grid">
                    <div className = "experience__content">
                        <div className = "experience__time">
                            <span className = "experience__rounder"></span>
                            {/* <span className = "experience__line"></span> */}
                        </div>
                        
                        <div className = "experience__data bd-grid">
                            <h3 className = "experience__title"> Freelance Web Developer</h3>
                            <span className = "experience__company">From 2019 to 2020 | Fiveer </span>
                            <p className = "experience__description">Working as a freelancer i had a lot of responsibilty in my head. So this gave me first hand experience of marketing, communication and development driven with direct client feedback.</p>
                            
                        </div> 
                    </div>

                </div>

            </section>

            <section className = "projects section" id = "projects">
                <h2 className = "section-title">Projects</h2>

                <div className = "projects__container bd-grid">
                    <div className = "projects__content">
                        <h3 className = "projects__title"><a href = "https://github.com/SazanDawadi/Beautiful-Listing">Beautiful List<AiFillGithub className = "github__icon" title = "View Code In Github" /></a></h3>
                        <p className = "projects__description">It is a webapp which scrapes the official Craiglist website and display the result in clean format as queried by the user. It is made by using Django as backend and beautifulsoup4 for scraping.</p>
                    </div>


                    <div className = "projects__content">
                        <h3 className = "projects__title"><a href = "https://github.com/SazanDawadi/Weather-Forcasting-Web-App">Weather Forecasting Web App<AiFillGithub className = "github__icon" title = "View Code In Github" /></a></h3>
                        <p className = "projects__description">It is a responsive webapp which displays the weather of any place in beautiful format. It is made by using Django as a backend and open weather APi to fetch the weather data.</p>
                    </div>

                    <div className = "projects__content">
                        <h3 className = "projects__title"><a href = "https://github.com/SazanDawadi/A-Star-Algorithm-Visualizer">A Star Algorithm Visualizer<AiFillGithub className = "github__icon" title = "View Code In Github" /></a></h3>
                        <p className = "projects__description">It is a implemantion of A* Algorithm using python paired with pygame, which visualizes how the algorithm finds the path of given path finding problem. I made this during my 2nd year of Computer Science for DS and Algo project. </p>
                    </div>

                    <div className = "projects__content">
                        <h3 className = "projects__title"><a href = "https://github.com/SazanDawadi/Writerr-dashboard-ui">Writerr Dashboard UI Design<AiFillGithub className = "github__icon" title = "View Code In Github" /></a></h3>
                        <p className = "projects__description">It is a miinimalist and modern dashboard UI of blog website. And it is made by using React Js as front end.</p>
                    </div>

                </div>

            </section>


            <section className = "references section" id ="references">
                <h2 className = "section-title">References</h2>
                <div className = "references__container bd-grid">

                    <div className = "references__content bd-grid">
                        <span className = "references__subtitle">Sr. Professor</span>
                        <h3 class = "references__title">Mr.Ramesh Khanna</h3>
                        <ul className = "references__contact">
                            {/* <li>Phone: 985134259</li> */}
                            <li>Email: rameshkhanna364@gmail.com</li>
                        </ul>
                        

                    </div>

                    {/* <div className = "references__content bd-grid">
                        <span className = "references__subtitle">Sr. Developer</span>
                        <h3 class = "references__title">Mr. Will Sentence</h3>
                        <ul className = "references__contact">
                            <li>Phone: +1 156-382-083</li>
                            <li>Email: willsentence34@email.com</li>
                        </ul>
                    

                    </div> */}
                </div>

            </section>


            <section className = "languages section" >
                <h2 className = "section-title">Languages</h2>

                <div className = "languages__container bd-grid ">
                    <ul className = "languages__content bd-grid">
                        <li className = "languages__name">
                            <span className = "languages__circle" ></span>English
                        </li>

                        <li className = "languages__name">
                            <span className = "languages__circle" ></span>Hindi
                        </li>

                        <li className = "languages__name">
                            <span className = "languages__circle" ></span>Nepali
                        </li>
                    </ul>


                </div>
            </section>

            <section className = "interests section">
                <h2 className = "section-title">Intrests</h2>

                <div className = "interests__container bd-grid">
                    <div className = " interests__content">
                        <BiHeadphone className ="interest__icon" />
                        <span className = "intrests__name" >Music</span>

                    </div>

                    <div className = " interests__content">
                        <FaHiking className ="interest__icon" />
                        <span className = "intrests__name" >Hike</span>

                    </div>

                    <div className = " interests__content">
                        <ImBook className = "interest__icon" />
                        <span className = "intrests__name" >Read</span>

                    </div>

                    <div className = " interests__content">
                        <BiDumbbell className = "interest__icon" />
                        <span className = "intrests__name " >Fitness</span>

                    </div>
                </div>

            </section>





            
        </div>
    )
}

export default Right
