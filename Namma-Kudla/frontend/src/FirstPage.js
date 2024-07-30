import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './FirstPage.css';

function FirstPage() {
    return (
        <div className="container">
            <div className="top-sidebar">
            <Link to="/home" className="next-button">Home</Link>

            <Link to="/contact" className="next-button">Contact Us</Link>
               
            </div>
            <div className="container"></div>
            
            <h2>Welcome to Namma Kudla <br></br>Namma Kudla<br></br> Tourism</h2>
            
            <p>" Explore the cultural heritage, natural beauty, and attractions of Kudla."</p>
            <br></br>
            <br></br>
            <Link to="/next" className="next-button">Select Place</Link> 
        </div>
    );
}

export default FirstPage;
