
import React from "react"
import { Link } from "gatsby"
export default function NavBar() {
    return (<nav>
        <h1>Web Warrior</h1>
        <div className="links">
            <Link to="/">home</Link>
            <Link to="/tunes">tunes</Link>
            <Link to="/events">events</Link>
        </div>
    </nav>)
}