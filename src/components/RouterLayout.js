import React from "react";
import { Outlet, Link } from "react-router-dom";

class RouterLayout extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <div class="logo">
                        <a href="#">Title</a>
                    </div>
                    <div class="menu">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contacts</Link></li>
                            <li><Link to='/sign'>Sign In</Link></li>
                        </ul>
                    </div>
                </nav>
                <Outlet />
            </div>
        )
    }
}


// function RouterLayout() {
//     return (
//         <div>
//             <nav>
//                 <ul>
//                     <li>
//                         <Link to='/'>Home</Link>
//                     </li>
//                     <li>
//                         <Link to='/blog'>Blog</Link>
//                     </li>
//                     <li>
//                         <Link to='/contacts'>Contact Us</Link>
//                     </li>
//                 </ul>
//             </nav>
//             <Outlet />
//         </div>
//     )
// }

export default RouterLayout