import React from "react";

// import { Link, Outlet } from "react-router-dom";
import Main from "./Main";
import CardCont from "./CardCont";
import Footer from "./Footer";

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Main />
                <div class="container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button>button</button>
                </div>
                <CardCont />
                <Footer />
            </div >
        )
    }
}

export default HomePage