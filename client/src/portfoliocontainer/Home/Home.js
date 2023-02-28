import React from 'react';
import Profile from './Profile'
import Footer from './Footer/Footer';
import "./Home.css"
function Home(props) {
    return (
        <div className='home-container'>
            <Profile/>
            <Footer/>
        </div>
    );
}

export default Home;