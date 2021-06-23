import React from 'react';
import './css/body.css';
import Nav from './Nav';
import Left from './Left'
import Right from './Right';

const Body = () => {
    return (
        <div>
            <header className = "l-header" id = "header">
                <Nav />
            </header>
            <main >
                <div className = " l-main bd-container resume" id ="body">
                    <Left />
                    <Right />
                    

                </div>
                

            </main>
            
        </div>
    )
}

export default Body;

