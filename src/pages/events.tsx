import React, { useEffect, } from "react";
import { Link } from "gatsby"

import Layout from "../components/page_content";
import * as subpageStyles from "../styles/subpage.module.css"
import * as eventStyles from "../styles/events.module.css"
import { EventModel } from "../models/event_model"

const today = new Date();

const listOfEvents = [
    new EventModel(
        "Feature Performance",
        "Linnemans",
        new Date("2023-03-15"),
    ),
    new EventModel(
        "Playing Bass with Yonder",
        "Anodyne Coffee",
        new Date("2023-03-09"),
    ), new EventModel(
        "Playing Bass with Yonder",
        "Company Brewing",
        new Date("2023-03-10"),
    ),
    new EventModel(
        "Playing Bass with Yonder",
        "Art Bar",
        new Date("2023-03-25"),
    ),
    new EventModel(
        "Playing Bass with Yonder",
        "Ope! Brewing Co.",
        new Date("2023-03-30"),
    ),
    new EventModel(
        "Ope! Brewing Co.",
        "Vendetta Coffee Bar",
        new Date("2023-03-30"),
    ),

];

const EventsView = () => {

    const filteredList = listOfEvents
        /// This is a hack
        .map(event => {
            const newDate = new Date(event.startDate);
            newDate.setDate(newDate.getDate() + 1); // Add one day
            return new EventModel(event.projectName, event.venueName, newDate);
        })
        /// End Hack
        .filter((event) => event.startDate >= today)
        .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
    return (<Layout>
        <div className={subpageStyles.subpage}>
            <h2>Events</h2>
            <h3>Picking, Grinning and Occasionally Slapping the Bass</h3>
            <div className={eventStyles.events} >


                {filteredList.map((event, index) =>
                    <div key={index}>
                        <h3> {event.venueName}</h3>
                        <h4>{event.projectName}</h4>
                        <p>{event.startDate.toDateString()}</p>
                    </div>

                )}

            </div>
        </div>
    </Layout>);
}

export default EventsView