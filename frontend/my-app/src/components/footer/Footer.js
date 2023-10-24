import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faSnapchat, faTiktok, faTwitter,faFacebookF,  faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import payments from '../../assets/payments.png'
import payments_m from '../../assets/payments_m.png';

const Footer = () => {
    return (
        <div className='footer-main'>
            <div className='footer-top'>
                <div className='top-first'></div>
                <div className='top-left'>
                    <div className='left-content'>
                        Home
                    </div>
                    <div className='left-content'>
                        Products
                    </div>
                    <div className='left-content'>
                        Collections
                    </div>
                    <div className='left-content'>
                        About
                    </div>
                    <div className='left-content'>
                        Help & FAQ
                    </div>
                    <div className='left-content'>
                        Track your Order
                    </div>
                    <div className='left-content'>
                        Start a Return or Exchange
                    </div>                   
                </div>
                <div className='top-right'>                    
                    <div className='right-content'>
                        <FontAwesomeIcon className='right-icon' icon={faTwitter} />

                    </div>
                    <div className='right-content'>
                        <FontAwesomeIcon className='right-icon' icon={faFacebookF} />
                    </div>
                    <div className='right-content'>
                        <FontAwesomeIcon className='right-icon' icon={faInstagram} />
                    </div>
                    <div className='right-content'>
                        <FontAwesomeIcon className='right-icon' icon={faTiktok} />
                    </div>
                    <div className='right-content'>
                        <FontAwesomeIcon className='right-icon' icon={faSnapchat} />
                    </div>
                    <div className='right-content'>
                        <FontAwesomeIcon className='right-icon' icon={faYoutube} />
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='bottom-left'>
                    <div>
                        © 2023, FINESSE US Inc.
                    </div>
                    <div className='bleft-content'>
                        Privacy Policy
                    </div>
                    <div className='bleft-content'>
                        Terms of Use
                    </div>
                </div>
                <div className='bottom-right'>
                    <div className='bright-content'>
                        <img className='bright-img' src={payments}/>                        
                        <img className='bright-imgm' src={payments_m}/>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Footer
