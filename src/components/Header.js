
import React from 'react'

import { Link } from 'react-router-dom';

export const Header = () => {

    return (

        <nav className="navbar navbar-inverse">

            <div className="container-fluid">


                <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about"> About</Link></li>
                    <li><Link to="/form"> Form </Link></li>
                    <li><Link to="/form1">Form1</Link></li>
                    <li><Link to="/form2">Form2</Link></li>
                    <li><Link to="/refsdemo">RefsDemo</Link></li>
                    <li><Link to="/addanddelete">Customer-Info</Link></li>
                    <li><Link to="/lifecycleA"> Lifecycle </Link></li>
                    <li> <Link to="/viewcontact"> Contact *</Link></li>
                    <li> <Link to="/imagerendering"> Image-Rendering </Link></li>
                    <li> <Link to="/propstype"> Props-type </Link></li>
                </ul>
            </div>
        </nav>

    );
}


export default Header;