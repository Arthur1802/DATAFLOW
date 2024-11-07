import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [showPassword, setShowPassword] = useState(false)

    const togglePassword = () => setShowPassword(!showPassword)

    const handleInputChange = (e) => {
        setValues(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const remeberUser = () => {
        console.log("Remember me")
    }

    const handleSubmit = () => {
        console.log(values)
    }

    return (
        <div className = "login-container container" data-aos = "fade-up">
            <h1 className = "poppins-medium">Login</h1>
            <div className = "form-floating poppins-regular">
                <input type = "email" className = "form-control" id = "floatingInput" placeholder = "name@example.com" />
                <label htmlFor = "floatingInput">Email address</label>
            </div>
            <div className = "form-floating poppins-regular">
                <input type = {showPassword ? "text" : "password"} className = "form-control" id = "floatingPassword" placeholder = "Password" onChange = {handleInputChange}/>
                <label htmlFor = "floatingPassword">Password</label>
                <i className = {showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} onClick = {togglePassword}></i>
            </div>

            <div className = "login-options">
                <a href = "#" className = "poppins-regular">Forgot password?</a>

                <div className = "form-check">
                    <input type = "checkbox" id = "rememberMe" name = "rememberUser" className = "form-check-input" onClick = {remeberUser}/>
                    <label htmlFor = "rememberMe" className = "poppins-regular">Remember me</label>
                </div>
            </div>

            <button type = "button" className = "btn btn-primary poppins-medium" onClick = {handleSubmit}>Login</button>

            <div className = "separator">
                <span className = "poppins-medium">OR</span>
            </div>

            <button type = "button" className = "btn btn-outline-secondary poppins-medium"><i className = "fa-brands fa-google"></i><span>Login with Google</span></button>

            <Link to = "/signin" className = "poppins-regular">Don&apos;t have an account?</Link>
        </div>
    )
}

export default Login