import React from "react";
import { Link } from "gatsby"
import * as  styles from "../styles/home.module.css"

// @ts-ignore
import BackgroundImage from "../images/green_background_vertical_low_quality.png";
import Layout from "./page_content";

// const centered = {
//     textAlign: "center",
// } as const;


// const headingAccentStyles = {
//     ...centered
// }

const HomeView = () => (<Layout>
    <section className={styles.header}>
        <div>
            <h2>Thank you for scanning my business card. This site is currently under construction</h2>
            <h3> Peter Irving</h3>
            <p>Generally Steppy Folk Music</p>
            <Link className={styles.btn} to="/tunes">My Tunes</Link>
        </div>
    </section>
</Layout>)

export default HomeView