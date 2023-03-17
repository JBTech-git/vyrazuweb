import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import './newnav.css';
export default function newnav() {
    return (
        <>
            <div className='new_nav'>
                <div className='nav_data'>
                    <div className='left_data'>
                        <img src='./Vyrazuslogo.png' alt='navata' />
                        <p>About</p>
                        <p>Service</p>
                        <p>Solution</p>
                        <p>Products</p>
                        <p>Ideas</p>
                        <p>Skills</p>
                        <p>Career</p>
                        <p>Blog</p>
                        <p>Contact</p>
                    </div>
                    <div className='rigth_data'>
                        <div className='nav_Searchbar'>
                            <button className='btn' style={{color:'#fff'}} type='submit' >Start Project</button>
                        </div>
                        <div className='sicon'>
                            <AiOutlineSearch />
                        </div>
                        <div className='bar'>
                           <HiMenu/>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <div className='dropbar'>
                    <p>About</p>
                        <p>Service</p>
                        <p>Solution</p>
                        <p>Products</p>
                        <p>Ideas</p>
                        <p>Skills</p>
                        <p>Career</p>
                        <p>Blog</p>
                        <p>Contact</p>
                    </div>
        </>
    )
}
