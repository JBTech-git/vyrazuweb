import React from 'react'
import './navbar.css';
import {FaFacebookF,FaGithubAlt,FaLinkedinIn,FaTwitter } from "react-icons/fa";
import { TfiYoutube} from "react-icons/tfi";
// import {NavLink} from 'react-router-dom';
export default function navbar() {
    return (
        <>
            <header>
                <nav>
                    <div className='left'>
                    <div className='LP'>
                    <a href='https://www.vyrazu.com/'>info@vyrazus.com</a>
                    </div> 
                    <div className='LP' style={{color:'#fff'}}>|</div>
                    <div className='LP'>
                    <a href='localhost:3000/'>+91 8388988586</a>
                    </div>
                    </div>

                    <div className='right'>
                    <div className='RP'>
                    <a href='http://localhost:3000/'><FaFacebookF/></a>
                    </div> 
                    <div className='RP'>
                    <a href='http://localhost:3000/'><FaTwitter/></a>
                    </div>
                    <div className='RP'>
                    <a href='http://localhost:3000/'><FaLinkedinIn/></a>
                    </div>
                    <div className='RP'>
                    <a href='http://localhost:3000/'><TfiYoutube/></a>
                    </div>
                    <div className='RP'>
                    <a href='http://localhost:3000/'><FaGithubAlt/></a>
                    </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
