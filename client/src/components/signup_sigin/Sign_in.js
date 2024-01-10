import React, { useState } from 'react'
import "./signup.css"
import { Link } from 'react-router-dom'
const Sign_in = () => {
    const [login,setLogin]=useState([])

    const handleLogin=()=>{
        console.log(login)
    }

  return (
    <>
    <section>
        <div className="sign_container">
            <div className='sign_header'>
                <img src='blacklogoamazon.png' alt='imglogo'/>
            </div>
            <div className='sign_form'>
                <form onSubmit={(e)=> e.preventDefault()}>
                    <h1>Sign-In</h1>
                    <div className="form_data">
                        <label htmlFor='email'>Email</label>
                        <input onInput={(e)=>setLogin({...login,email:e.target.value})}  type='email' placeholder='Enter your Email' name='email' id='email '/>
                    </div>
                    <div className="form_data">
                        <label htmlFor='password'>Password</label>
                        <input onInput={(e)=>setLogin({...login,password:e.target.value})}  type='password' placeholder='Enter your Password' name='password' id='password'/>
                    </div>
                    <button onClick={()=>handleLogin()} className='signin_btn'>Continue</button>
                </form>
            </div>
            <div className='create_accountinfo'>
            <p>Don't have an account?</p>
           <button ><Link to="/register" >Create Your amazon account</Link></button> 
            </div>
        </div>
    </section>
    </>
  )
}

export default Sign_in
