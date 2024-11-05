import React from 'react'

const Contact = () => {
    return (
        <div className = "contact-container">
            <h1>Contact</h1>
            <h3>If there&apos;s a problem with the app or you&apos;d like to make any suggestion to make the app better, feel free to send an email</h3>

            <form action = "/contact" method = "POST">
                <div className = "form-names-container">
                    <div className = "form-floating">
                        <input type = "text" className = "form-control" id = "floatingInput" placeholder = "First name" />
                        <label htmlFor = "floatingInput">First name</label>
                    </div>
                    <div className = "form-floating">
                        <input type = "text" className = "form-control" id = "floatingInput" placeholder = "Last name" />
                        <label htmlFor = "floatingInput">Last name</label>
                    </div>
                </div>
                <div className = "form-floating">
                    <input type = "email" className = "form-control" id = "floatingInput" placeholder = "name@example.com" />
                    <label htmlFor = "floatingInput">Email address</label>
                </div>
                <div className = "form-floating">
                    <textarea className = "form-control" id = "floatingTextarea" placeholder = "Type your message here" />
                    <label htmlFor = "floatingTextarea">Message</label>
                </div>

                <button type = "submit" className = "btn btn-primary">Send</button>
            </form>
        </div>
    )
}

export default Contact