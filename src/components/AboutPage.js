import React from "react";
import Main from "./Main";
import CardCont from "./CardCont";
import Footer from "./Footer";

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <Main />
                <div className="block">
                    <div className="block-text">
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div >
                <div className="block ">
                    <div className="block-text text2">
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <CardCont />
                <Footer />
            </div>
        )
    }
}

export default AboutPage