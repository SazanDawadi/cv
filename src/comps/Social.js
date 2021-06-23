import React from 'react';
import './css/social.css'

import {ImLinkedin} from 'react-icons/im';
import {AiFillGithub} from 'react-icons/ai'
import {FaFacebookF} from "react-icons/fa"

const Social = () => {
    return (
        <div>
            <section className = "home" id ="home">
                <h2 className = "section-title">SOCIAL</h2>
                
                <div className = "social__container bd-grid">
                    <a href = "https://www.linkedin.com/in/sajan-dawadi" target = "_blank"  rel="noreferrer" className = "social__link">
                        <ImLinkedin className = "social__icon" />@Sajan-Dawadi
                    </a>
                    <a href = "https://github.com/SazanDawadi" className = "social__link" target = "_blank" rel="noreferrer"  >
                        <AiFillGithub className = "social__icon" />@SazanDawadi
                    </a>
                    <a href = "https://www.facebook.com/sajan.dawadi/" className = "social__link" target = "_blank" rel="noreferrer" >
                        <FaFacebookF className = "social__icon" />@Sajan.Dawadi
                    </a>

                </div>
        </section>
        <section className = "profile section" id ="profile">
            <h2 className = "section-title">Profile</h2>
            <p className = "profile__description">I am person, responsible with their works during working hours. My happiest moment in life is when i make the picture in my mind into reality. I am computer Science major third year student with some experience in freelancing.</p>
        </section>
        </div>
    )
}

export default Social
