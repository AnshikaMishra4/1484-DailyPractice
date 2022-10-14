import React, { useState } from 'react'
import './Login.css'
import login_image from "../WebsiteMaterial/images/login_image.png"
import signup_image from "../WebsiteMaterial/images/login_image.svg"
import logo from "../WebsiteMaterial/images/flex_logo.jpg"
import { Link , useNavigate} from 'react-router-dom'


export default function Login2() {
  const [state, setState] = useState('login');

    const showLogin = () => {
        setState('login');
    }
    const showSignup = () => {
        setState('signup');
    }
    

  return (
    <>
      <div style={{ 'display': `${state === 'login' ? 'block' : 'none'}` }}>
          <div id="login2_login" >
              <div id="login_form"  >
                <div>
                  <Link to="/"><img src={logo} id="logo" alt=".../"/></Link>
                  <h1 className='login2_heading'>
                    Sign in
                  </h1>
                  <form>
                      <input type="text" name="email" className="login2_input"   placeholder="Email"/> 
                      <input type="password" name="password" className="login2_input"   placeholder='Password'/>
                      <button className="login2_button" >SIGN IN</button>
                      <Link to="/sendotp" className="login2_tell"><p > Forget Password?</p></Link>
                      <p className="login2_tell"  onClick={showSignup} >New here? Create Account </p>
                  </form>
                </div>
              </div>
              <div id="details_login">
                <div>
                  <h1 className='login2_heading'>Welcome !</h1>
                  <p className="login2_para">
                  To keep connected with us please login 
                  </p>
                  <img src={login_image}  id="login_image" alt=".../"/>
                </div>
              </div>
          </div>
        </div>

        <div style={{ 'display': `${state === 'signup' ? 'block' : 'none'}` }}>
          <div id="login2_signup"  >
              <div id="details_login">
                <div>
                  <h1 className='login2_heading'>Hello!</h1>
                  <p className="login2_para">
                  Enter your details here
                  </p>
                  <img src={signup_image} alt="..." id="signup_image"/>
                </div>
              </div>
              <div id="login_form">
                <div>
                <Link to="/"><img src={logo} id="logo"  alt=".../"/></Link>
                  <h1 className='login2_heading'>
                    Sign Up
                  </h1>
                  <form >
                    <input type="text"  name="name" className="login2_input"  placeholder='Name'/> 
                    <input type="email" name="email" className="login2_input"  placeholder='Email'/> 
                    <input type="password" name="password" className="login2_input"  placeholder='Password'/>

                    <button className="login2_button">SIGN UP</button>
                    <p className="login2_tell"  onClick={showLogin}>Already have an Account? </p>
                  </form>
                </div>
              </div>
          </div>
        </div>
    </>
  )
}
