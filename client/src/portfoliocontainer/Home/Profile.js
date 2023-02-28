import React from 'react'
import Typical from 'react-typical'
import "./Profile.css";

export default function Profile() {
    return (
        <div className='Profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='https://www.facebook.com/profile.php?id=100031126822738'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.instagram.com/pawan7471/'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/pawan-319179184/'>
                            <i className='fa fa-linkedin'></i>
                        </a>
                        <a href='https://mail.google.com/mail/u/0/#inbox'>
                            <i className='fa fa-google-plus-square'></i>
                        </a>

                        </div>
                       

                    </div>

                    <div className='profile-details-name'>
                        <span className='primart-text'>
                            {""}
                            Hello, I'M   <span className='highlighted-text'> Pawan Goswami</span>

                        </span> 
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {""}
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Web Developer",
                                        1000,
                                        "Data Analytics",
                                        1000,
                                        "React-Native Developer",
                                        1000,



                                    ]}

                                />


                            </h1>
                            <span className='portfolio-tagline'>
                                knack the building application with front and back operations.

                            </span>


                        </span>

                    </div>
                    <div className='profile-option'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{""}


                        </button>
                        <a href='Pawan updated resume.pdf' download='Pawan Pawan updated resume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>

                    </div>

                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>


                    </div>
                </div>
            </div>

        </div>
    )
}
