import React from 'react';
import './Footer.css'
function Footer(props) {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img src={require("../../../assets/Home/shape.png").default} 
                alt="no internet conncetion"/>
            </div>
            
        </div>
    );
}

export default Footer;