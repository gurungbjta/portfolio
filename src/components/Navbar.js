import {Link} from 'react-router-dom'
import React from 'react'

export default function Navbar() {
    return (
        <div className="container pt-3">
            <div className="text-center" id="name">BIJAYATA GURUNG</div>
            <nav className="navbar pt-4 justify-content-around">
                <Link to="/" className="navb">
                    <div>Home</div>
                </Link>
                <Link to="/about" className="navb">
                    <div>About Me</div>
                </Link>
                <Link to="/projects" className="navb">
                    <div>Projects</div>
                </Link>
                <Link to="/contact" className="navb">
                    <div>Contact Me</div>
                </Link>
            </nav>
        </div>
    )
}
