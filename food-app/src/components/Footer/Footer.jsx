import { assets } from '../../assets/assets'
import './Footer.css'

import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='footer' id='footer'>
                <div className="footer-content">
                    <div className="footer-content-left">
                        <img src={assets.logo} alt="" />
                        <p>Here, visitors can discover the basic information about your business, such as how you got started, where you’re based, your mission, and profiles of your top team members. You can also include links to store hours and locations (if you have them), links to social media pages, and contact information.</p>
                        <div className="footer-social-icon">
                            <img src={assets.facebook_icon} alt="" />
                            <img src={assets.twitter_icon} alt="" />
                            <img src={assets.linkedin_icon} alt="" />
                        </div>
                    </div>
                    <div className="footer-content-center">
                        <h2>Company</h2>
                        <ui>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ui>
                    </div>
                    <div className="footer-content-right">
                        <h2>Get In Touch</h2>
                        <ui>
                            <li>+1-212-456-8979</li>
                            <li>contact@tomato.com</li>
                        </ui>
                    </div>
                </div>
                <hr />
                <p className='copyright-paragraph'> Copyright 2025 @ Tomato.com - All Right Reserved.</p>
            </div>

        </>

    )
}

export default Footer