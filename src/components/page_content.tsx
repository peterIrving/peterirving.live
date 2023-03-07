import React, { FC, PropsWithChildren } from 'react'
import { useMediaQuery } from 'react-responsive'

// @ts-ignore
import BackgroundImage from "../images/web_background_white.png";
import NavBar from './nav_bar';
import "../styles/global_styles.css"

const Layout: FC<PropsWithChildren> = (props) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    let margin = isTabletOrMobile ? 16 : 300;

    return <div className="layout"
        style={{ position: "relative", height: "100vh" }}>
        <NavBar />
        <div>
            {props.children}
        </div>
        <footer><p>Copyright 2023 Peter Irving</p></footer>
    </div>
}

export default Layout