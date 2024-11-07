import React, { useState } from 'react'
import './Signin.css'
import { Link } from 'react-router-dom'

const Signin = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmation: ''
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmation, setShowConfirmation] = useState(false)

    const togglePassword = () => setShowPassword(!showPassword)
    const toggleConfirmation = () => setShowConfirmation(!showConfirmation)

    const handleInputChange = (e) => {
        setValues(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = () => {
        console.log(values)
    }

    return (
        <div className = "signin-container container" data-aos = "fade-up">
            <h1 className = "poppins-medium">Sign In</h1>
            <div className = "form-floating poppins-regular">
                <input type = "text" className = "form-control" id = "floatingName" placeholder = "John" onChange = {handleInputChange}/>
                <label data-bs-toggle = "tooltip" data-bs-title = "You can insert either only the first name or both first and last names" htmlFor = "floatingName">Name</label>
            </div>
            <div className = "form-floating poppins-regular">
                <input type = "email" className = "form-control" id = "floatingInput" placeholder = "name@example.com" onChange = {handleInputChange}/>
                <label htmlFor = "floatingInput">Email address</label>
            </div>
            <div className = "form-floating poppins-regular">
                <input type = {showPassword ? "text" : "password"} className = "form-control" id = "floatingPassword" placeholder = "Password" onChange = {handleInputChange}/>
                <label htmlFor = "floatingPassword">Password</label>
                <i className = {showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} onClick = {togglePassword}></i>
            </div> 
            <div className = "form-floating poppins-regular">
                <input type = {showConfirmation ? "text" : "password"} className = "form-control" id = "floatingConfirmation" placeholder = "Confirm Password" onChange = {handleInputChange}/>
                <label htmlFor = "floatingConfirmation">Confirm Password</label>
                <i className = {showConfirmation ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} onClick = {toggleConfirmation}></i>
            </div>

            <button type = "button" className = "btn btn-primary poppins-medium" onClick = {handleSubmit}>Sign In</button>

            <div className = "separator">
                <span className = "poppins-medium">OR</span>
            </div>

            <button type = "button" className = "btn btn-outline-secondary poppins-medium"><i className = "fa-brands fa-google"></i><span>Sign In with Google</span></button>
            
            <Link to = "/login" className = "poppins-regular">Already have an account?</Link>
        </div>
    )
}

export default Signin