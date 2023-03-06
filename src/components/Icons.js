import React, { Component } from 'react';
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';

class Like extends Component {
    render() {
        return (
            <IconContext.Provider
                value={{ style: { fontSize: '35px', margin: "2px" } }}>
                <div>
                    <FaFacebook /><AiFillGoogleCircle /><AiFillTwitterCircle />
                </div>
            </IconContext.Provider>
        )
    }
}

export default Like;