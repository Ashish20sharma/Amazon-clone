import React from 'react'
import "./cart.css"
import { Divider } from '@mui/material'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div className='cart_section'>
            <div className='cart_container'>
                <div className='left_cart'>
                    <img src='https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70' alt='cat_img' />
                    <div className='cart_btn'>
                        <button className='cart_btn1'>Add to cart</button>
                       <Link to="/buynow"><button className='cart_btn2'>Buy Now</button></Link> 
                    </div>
                </div>
                <div className='right_cart'>
                        <h3>Fitness Gear</h3>
                        <h4>Pigeon FAVOURITE Electric kettle (1.5L, Silver,Black)</h4>
                        <Divider/>
                        <p className='mrp'>M.R.P :$125</p>
                        <p>Deal of the Day:<span style={{color:"#B12704"}}>$245</span></p>
                        <p>You save:<span style={{color:"#B12704"}}>$24</span></p>
                        <div className='discount_box'>
                            <h5>Discount : <span style={{color:"#111"}}>Extra 10% off</span></h5>
                            <h4>Free Delivery <span style={{color:"#111",fontWeight:600}}>oct 8 - 21</span>Details</h4>
                            <p>Fastest delivery:<span style={{color:"#111",fontWeight:600}}> Tomorrow 11AM</span></p>
                        </div>
                        <p className='description'>About the Item : <span style={{color:"#565959",fontSize:14,fontWeight:500,letterSpacing:"0.4px"}}>Keep in mind that the initial access to your app might take a few moments as Heroku provisions resources. Additionally, if your app doesn't receive traffic for a certain period, Heroku's free tier may cause the dynos to go to sleep, resulting in a delay when accessing the app for the first time.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Cart
