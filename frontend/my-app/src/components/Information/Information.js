import React from 'react'
import './Information.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faRecycle, faCrosshairs, faUserGroup} from '@fortawesome/free-solid-svg-icons';
const Information = () => {
    return (
        <div className='main-info'>
            <div className='info-block'>
                <div className='block-title'><FontAwesomeIcon className='block-icon' icon={faTruck} /> Free Shipping on Orders Over $75 </div>
                <div className='block-content'>Treating yourself is the ultimate self-care for bad b*tches,
                 so dont hesitate to get that perfect fit for the occasion. Free shipping on 
                 any order over $75, because you deserve it 🫡
                </div>
                <div className='block-learn'>
                    learn More
                </div>
            </div>
            <div className='info-block'>
                <div className='block-title'><FontAwesomeIcon className='block-icon' icon={faRecycle} />Free exchanges & Returns </div>
                <div className='block-content'>You remain a 10 out of 10 in our sickest fits. We’re here to help with finding the
                 perfect fits that completely satisfy you 😘
                </div>
                <div className='block-learn'>
                    learn More
                </div>
            </div>
            <div className='info-block'>
                <div className='block-title'><FontAwesomeIcon icon={faCrosshairs} className='block-icon' />Sustainable Fits That Never Miss via AI </div>
                <div className='block-content'>We understand the assignment: make the fits hot, not our planet. We make sure to never overproduce by finding the hottest trends with AI and only 
                making the fits you voted on at the right amount 😉
                </div>
                <div className='block-learn'>
                    learn More
                </div>
            </div>
            <div className='info-block'>
                <div className='block-title'><FontAwesomeIcon icon={faUserGroup} className='block-icon' />Size Inclusive up to 3X, No Cap.</div>
                <div className='block-content'>Going from XS to 3X on all products with more coming quite soon, we make sure that all you baddies get what you
                 deserve. We’ve got something for everyone 💕
                </div>
                <div className='block-learn'>
                    learn More
                </div>
            </div>
        </div>
    )
}

export default Information;
