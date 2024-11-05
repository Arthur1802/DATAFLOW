import React from 'react'

const Login = () => {
    return (
        <div className = "login-container" data-aos = "fade-up">
           <div className = "form-floating">
                <input type = "email" className = "form-control" id = "floatingInput" placeholder = "name@example.com" />
                <label htmlFor = "floatingInput">Email address</label>
            </div>
            <div className = "form-floating">
                <input type = "password" className = "form-control" id = "floatingPassword" placeholder = "Password" />
                <label htmlFor = "floatingPassword">Password</label>
            </div> 
        </div>
    )
}

export default Login