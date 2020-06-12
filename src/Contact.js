import React from 'react';

function Contact(){

    return(
        <div>
            <h1 className="headers">CONTACT US</h1>

            <div className="contact">
                <form>
                    <label for="fname"> </label>
                    <input type="text" id="name" name="name" placeholder="Your name ..."></input>
                    <label for="email"> </label>
                    <input type="email" id="email" email="email" placeholder="Your email  ..."></input>
                    <label for="subject"></label>
                    <textarea id="subject" name="subject" placeholder="Youre message ..." style={{height:"200px"}}></textarea>
                </form>
                <input type="submit"></input>

               

            </div>

            
        </div>
    )
}

export default Contact;