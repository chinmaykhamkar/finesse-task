import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Emaillist.css'
const Emaillist = () => {
    return (
        <div className='main-email'>
            <div className='email-content'>
                <div className='email-title'>
                    Sign up to Email
                </div>
                <div className='email-middle'>
                    <div className='email-left'>
                        Sign up to receive FINESSE emails and get first dibs on new arrivals,
                        sales, exclusive content, events and more!
                    </div>
                    <div className='email-right'>
                        <TextField id="standard-basic" label="Email" variant="standard" />
                        <Button className='email-btn' variant="contained">Enter</Button>
                    </div>
                </div>
                <div className='email-bottom'>
                By entering your email address, you agree to receive FINESSE offers, promotions,
                 other commercial messages. You can view our Privacy Policy here and you may unsubscribe at any time.


                </div>
            </div>
        </div>
    )
}

export default Emaillist;
