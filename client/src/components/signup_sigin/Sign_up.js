import React, { useState } from 'react'
import "./signup.css"
import { Link } from 'react-router-dom'
import axios from "axios"
const Sign_up = () => {
    const [userData, setuserData] = useState([])

    const handleUserdata = () => {
        try {
            if (userData.password === userData.Cpassword) {
                axios.post("/register", userData).then((res, err) => {
                    if (res.status === 200) {
                        alert("Sign up Successful")
                        setuserData({...useState,name:'',email:'',mobile:'',password:"",Cpassword:""})
                    } else {
                        alert("Invalid details.")
                    }
                })
            }else{
                alert('Password does not match')
            }
        } catch (error) {
            alert("Please fill valid details!")
        }
    }
    return (
        <section>
            <div className="sign_container">
                <div className='sign_header'>
                    <img src='blacklogoamazon.png' alt='imglogo' />
                </div>
                <div className='sign_form'>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <h1>Sign-Up</h1>
                        <div className="form_data">
                            <label htmlFor='name'>Your Name</label>
                            <input value={userData.name} onInput={(e) => setuserData({ ...userData, name: e.target.value })} type='text' placeholder='Enter your Full Name' name='name' id='name ' />
                        </div>
                        <div className="form_data">
                            <label htmlFor='email'>Email</label>
                            <input value={userData.email} onInput={(e) => setuserData({ ...userData, email: e.target.value })} type='email' placeholder='Enter your Email' name='email' id='email ' />
                        </div>
                        <div className="form_data">
                            <label htmlFor='mobile'>Mobile</label>
                            <input value={userData.mobile} onInput={(e) => setuserData({ ...userData, mobile: e.target.value })} type='text' placeholder='Enter your Email' name='mobile' id='mobile ' />
                        </div>
                        <div className="form_data">
                            <label htmlFor='password'>Password</label>
                            <input value={userData.password} onInput={(e) => setuserData({ ...userData, password: e.target.value })} type='password' placeholder='Your password must be 8 characters...' name='password' id='password' />
                        </div>
                        <div className="form_data">
                            <label htmlFor='Cpassword'>Conform Password</label>
                            <input value={userData.Cpassword} type='password' onInput={(e) => setuserData({ ...userData, Cpassword: e.target.value })} placeholder='Conform your Password' name='Cpassword' id='Cpassword' />
                        </div>
                        <button onClick={() => handleUserdata()} className='signin_btn'>Continue</button>
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
