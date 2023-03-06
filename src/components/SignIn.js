import React from 'react'
import Footer from './Footer'
import Like from './Icons'
function SignIn() {
    return (
        <div>
            <div class="container-2">
                <div class="contact-form-1">
                    <h2>Login</h2>
                    <input type="text" placeholder="Enter your Name" />
                    <input type="email" placeholder="Enter your email adress" />
                    <button class="card-btn-1">Click me</button>
                    <p>Sign up with</p>
                    <Like />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignIn