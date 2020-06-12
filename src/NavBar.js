import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){

    const logo = "https://lh3.googleusercontent.com/8S8tDfYlYMQgkDvzuann7_mEpvjlaeTVXoR4337FfIwJ_kuG9pp57ezr69G71GcjwcLUgaefPpEbcnFZzSSmrwD_8Y-snEeixzA6W9Us45AK_goKZyMnmaqekvpxckrhtpIADZtosw=w2400"
    
    return(
        <nav style={{zIndex:"100"}}>
             <div className="logo">
        <Link to="/"><img alt="logo" src= { logo }></img></Link>
        </div>
            <ul>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/News">News</Link></li>
                <li><Link to="/Releases">Releases</Link></li>
                <li><Link to="/Artists">Artists</Link></li>
            </ul>
        </nav>
    )
    
}

export default NavBar;
