import React, { useState } from 'react'
import "./signup.css"
import { Link } from 'react-router-dom'
const Sign_up = () => {
    const [userData, setuserData] = useState([])

    const handleUserdata=()=>{
        console.log(userData)
    }
    return (
        <section>
            <div className="sign_container">
                <div className='sign_header'>
                    <img src='blacklogoamazon.png' alt='imglogo' />
                </div>
                <div className='sign_form'>
                    <form onSubmit={(e)=>e.preventDefault()}>
                        <h1>Sign-Up</h1>
                        <div className="form_data">
                            <label htmlFor='name'>Your Name</label>
                            <input onInput={(e)=>setuserData({...userData,name:e.target.value})} type='text' placeholder='Enter your Full Name' name='name' id='name ' />
                        </div>
                        <div className="form_data">
                            <label htmlFor='email'>Email</label>
                            <input onInput={(e)=>setuserData({...userData,email:e.target.value})} type='email' placeholder='Enter your Email' name='email' id='email ' />
                        </div>
                        <div className="form_data">
                            <label htmlFor='mobile'>Mobile</label>
                            <input onInput={(e)=>setuserData({...userData,mobile:e.target.value})} type='text' placeholder='Enter your Email' name='mobile' id='mobile ' />
                        </div>
                        <div className="form_data">
                            <label htmlFor='password'>Password</label>
                            <input onInput={(e)=>setuserData({...userData,password:e.target.value})} type='password' placeholder='Enter your Password' name='password' id='password' />
                        </div>
                        <div className="form_data">
                            <label htmlFor='Cpassword'>Conform Password</label>
                            <input type='password' onInput={(e)=>setuserData({...userData,Cpassword:e.target.value})} placeholder='Conform your Password' name='Cpassword' id='Cpassword' />
                        </div>
                        <button onClick={()=>handleUserdata()} className='signin_btn'>Continue</button>
                        <div className='signin_info'>
                            <p>Already have an account?</p>
                            <Link to="/login">Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Sign_up
