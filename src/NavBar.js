import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){

    return(
        
        <nav style={{zIndex:"100"}}>
             <div className="logo">
        <Link to="/"><img alt="logo" src="images/uhr.jpg"></img></Link>
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
