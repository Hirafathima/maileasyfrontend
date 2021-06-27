import React from 'react';
import { BrowserRouter as Router,Link } from "react-router-dom";
import ActivityModal from "./ActivityModal";
import './topbar.css'

function TopBar(){
    return (
        <div className="top-bar-main">
            <div className="search-main ">
                <input className='search-input form-control px-3 mb-4'
                        type='text'
                        placeholder='Search for a mail'
                        name='search'>
                </input>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
                
            </div>
            <div className="prof-right">
            <button
                    className='btn start-btn'
                    type='button'
                    data-toggle='modal'
                    data-target='#exampleModalCenter'
                    style={{marginRight:40}}>
                    Compose Mail
                </button>
                <div
                    className='modal fade'
                    data-backdrop="false"
                    id='exampleModalCenter'
                    tabindex='-1'
                    role='dialog'
                    aria-labelledby='exampleModalCenterTitle'
                    aria-hidden='true'
                >
                    <div
                        className='modal-dialog modal-dialog-centered'
                        role='document'
                    >
                        <div className='modal-content modal-main'>
                            <ActivityModal />
                        </div>
                    </div>
                </div>

                <div className="dropdown">
                    <a class="prof-a dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <figure className='top-profile'></figure>
                    </a>
                    <div class="drop dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <Link to="/index/profile" class="dr-link dropdown-item" href="#">Profile</Link>
                        <Link to="/logout" class="dr-link dropdown-item" href="#">Log Out</Link>
                    </div>
                </div>
            </div>
            
            
            {/* <Link to='/logout' className='btn start-btn px-3'>
                        Logout
            </Link> */}
        </div>
    );
}



export default TopBar;