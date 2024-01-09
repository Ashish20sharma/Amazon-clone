import React from 'react'
import "./footer.css"
const Footer = () => {
    const year=new Date().getFullYear()
    return (
        <footer>
            <div className='footer_container'>
                <div className='footer_details_one'>
                    <h3>Get to Know Us</h3>
                    <p>About Us</p>
                    <p>Career</p>
                    <p>Press Releases</p>
                    <p>Amazon</p>
                </div>
                <div className='footer_details_one'>
                    <h3>Connect with Us</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className='footer_details_one forres'>
                    <h3>Make Money with US</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className='footer_details_one forres'>
                    <h3>Make Money with US</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
            </div>
            <div className='lastdetails'>
                <img src='/Amazon_logo.png' alt='img' />
                <p>Condition of Use & sale &nbsp;&nbsp;&nbsp; Privacy Notice &nbsp;&nbsp;&nbsp;  Interest-Based Ads &nbsp;&nbsp;&nbsp;  @ 1994-{year}, Amazon.com, Inc, or its affiliates</p>
            </div>
        </footer>
    )
}

export default Footer
