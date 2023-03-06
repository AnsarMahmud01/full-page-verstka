import React from "react";
import Main from "./Main";
import Footer from "./Footer";
import Tele from "../image/Tele.js";
import Geo from "../image/Geo";
import Phone from "../image/Phone";
import Email from "../image/Email";

class ContactPage extends React.Component {
    render() {
        return (
            <div>
                <Main />
                <div class="card-container" >
                    <div class="card-1" style={{ borderRadius: "0px", height: "250px", marginTop: "90px" }}>
                        <Geo />
                        <h2>Our Office</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                    </div>
                    <div class="card-1" style={{ borderRadius: "0px", height: "250px", marginTop: "90px" }}>
                        <Phone />
                        <h2>Phone Number</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                    </div>
                    <div class="card-1" style={{ borderRadius: "0px", height: "250px", marginTop: "90px" }}>
                        <Tele />
                        <h2>Telegram</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div class="card-1" style={{ borderRadius: "0px", height: "250px", marginTop: "90px" }}>
                        <Email />
                        <h2>Email</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                <div class="container-1">
                    <div class="contact-form">
                        <h2>Contact Us</h2>
                        <input type="text" placeholder="Enter your Name" />
                        <input type="email" placeholder="Enter your email adress" />
                        <textarea></textarea>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default ContactPage