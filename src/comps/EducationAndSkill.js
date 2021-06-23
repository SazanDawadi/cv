import React from 'react';
import './css/educationAndSkill.css'

const EducationAndSkill = () => {
    return (
        <div class>
            <section className = "eduacation section" id = "education">
                <h2 className = "section-title">Education</h2>

                <div className = "eduaction__container bd-grid">
                    <div className = "education__content">
                        <div className = "education__time">
                            <span className = "education__rounder"></span>
                            <span className = "education__line"></span>

                        </div>
                        <div className ="education__data bd-grid">
                            <h3 className = "education__title">High School</h3>
                            <span className = "education__studies">National School Of Sciences</span>
                            <span class = "education__year">2016-2018</span>

                        </div>

                    </div>

                    <div className = "education__content">
                        <div className = "education__time">
                            <span className = "education__rounder"></span>

                            {/* <span className = "education__line"></span> */}

                        </div>
                        <div className ="education__data bd-grid">
                            <h3 className = "education__title">Bachelor in Computer Science and IT</h3>
                            <span className = "education__studies">National College Of Computer Studies</span>
                            <span class = "education__year">2018-2022</span>

                        </div>

                    </div>


                </div>

            </section>


            <section className = "skills section" id = "skills" >
                <h2 className = "section-title">Skills</h2>

                <div className = "skills__content bd-grid">
                    <ul className = "skills_data">
                        <li className = "skill__name">
                            <span className = "skills__circle"></span>Node
                        </li>

                        <li className = "skill__name">
                            <span className = "skills__circle"></span>React JS
                        </li>

                        <li className = "skill__name">
                            <span className = "skills__circle"></span>Angular
                        </li>
                    </ul>

                    <ul className = "skills_data">
                        <li className = "skill__name">
                            <span className = "skills__circle"></span>Firebase
                        </li>

                        <li className = "skill__name">
                            <span className = "skills__circle"></span>Mongo DB
                        </li>
                        <li className = "skill__name">
                            <span className = "skills__circle"></span>Python
                        </li>
                    </ul>
                </div>

            </section>




            
        </div>
    )
}

export default EducationAndSkill
