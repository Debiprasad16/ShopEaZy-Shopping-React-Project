import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import shoppingLogo from './Image/shop-logo.png'
import { Link } from 'react-router-dom'
import './Login.css'
function Login(){
    return(
        <div className="login">
            <Link>
                <img className="login_logo" src={shoppingLogo} alt="logo" />
            </Link>
            <div className="login_container">
                <h1>Welcome to ShopEaZy</h1>
                <h2>Sign In</h2>
                <form className="login_form">
                    <TextField className="login_email" type="email" label="E-Mail" variant="outlined" />
                    <p></p>
                    <TextField className="login_password" type="password" label="Password" variant="outlined" />
                    <p></p>
                    <Button type="submit" variant="outlined" color="primary" className="login_signInButton">Sign In</Button>
                </form>
                <p>By Signing In You're Agree to ShopEaZy's Terms & Conditions.</p>
                <p>New to ShopEaZy?</p>
                <Button variant="outlined" color="secondary">Create Your Account</Button>
            </div>
        </div>
    )
}
export default Login