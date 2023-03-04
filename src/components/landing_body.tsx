import React, { FC } from "react"

// @ts-ignore
// import BackgroundImage from "../images/web_background_white_3.png";
// import BackgroundImage from "../images/web_background_white_3.png";
import BackgroundImage from "../web_background_white_3.png";
// import isTabletOrMobile from '../media_queries'
import { useMediaQuery } from 'react-responsive'


const LandingBody: FC = () => {
    // let isTablet = isTabletOrMobile;
    // const isTablet = useMediaQuery({ query: '(max-width: 1224px)' })
    let isTablet = true;
    const videoListStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "scroll",
        height: "500px",
        margin: undefined as string | undefined,
        marginLeft: undefined as string | undefined,
        marginRight: undefined as string | undefined,
        flex: isTablet ? undefined : "1 0 50%",
    };

    if (isTablet) {
        videoListStyle.margin = "10px";
    } else {
        videoListStyle.height = "50vh";
        videoListStyle.marginLeft = "50px";
        videoListStyle.marginRight = "50px";
    }
    return (
        <div
            style={{
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center"
            }}

        >
            <div
                style={videoListStyle as React.CSSProperties}
            // style={{
            //     display: "flex",
            //     flexDirection: "column",
            //     alignItems: "center",
            //     overflowY: "scroll",
            //     height: "500px",

            // }}
            >
                {/* <Video videoSrcURL="https://www.youtube.com/embed/N8U6DdONxSk" videoTitle="Sittin on top of the world"></Video>
                <Video videoSrcURL="https://www.youtube.com/embed/N8U6DdONxSk" videoTitle="Sittin on top of the world"></Video>
                <Video videoSrcURL="https://www.youtube.com/embed/N8U6DdONxSk" videoTitle="Sittin on top of the world"></Video> */}

            </div>

        </div >);
}
export default LandingBody