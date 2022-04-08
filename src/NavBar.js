import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){

    const logo = "https://lh3.googleusercontent.com/hBan1-ORAnMMr5AUBLdKocXQt7u56qDcvd1z0htVcsflcDeFL8-UY2hA50at2wJQG1-eCCvR12FMQ-XkY4pTubC5Do9SDWPRApImREPDYk5-2Az7psSI8hsET0UEMi2equJvQ7Y-vw=w2400"
    
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
