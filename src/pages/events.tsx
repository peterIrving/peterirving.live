import React from "react";
import { Link } from "gatsby"

import Layout from "../components/page_content";

const centered = {
    textAlign: "center",
} as const;


const headingAccentStyles = {
    ...centered
}

const EventsView = () => (<Layout>
    <h2>Events</h2>
</Layout>)

export default EventsView