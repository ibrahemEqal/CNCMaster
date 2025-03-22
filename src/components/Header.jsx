import React from "react";
import { Link } from "react-router-dom"; 
import '../style/Header.css';

const Header = () => {
    return (
        <div className="page-Header">
            <div className="Brand-Name">
                <h1>CNC Master</h1>
                <h5>Art, Speed, Creativity!</h5>
            </div>
            <div className="Head-Nav">
                <nav>
                    
                    <Link to="/" className="nav-button">Home 🏠</Link>
                    <Link to="/product" className="nav-button">Product 💎</Link>
                    <Link to="/callus" className="nav-button">Call Us 📱</Link>
                    <Link to="/location" className="nav-button">Location 🌍</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;
