
import React from "react"
import { Link } from "gatsby"
export default function NavBar() {
    return (<nav>
        <h1>Peter Irving</h1>
        <div className="links">
            <Link to="/">home</Link>
            <Link to="/tunes">tunes</Link>
            <Link to="/events">events</Link>
            <a href="https://www.instagram.com/peter__irving/" target="_blank" ><img src="/icons8-instagram-48.png"></img></a>
        </div>
    </nav>)
}