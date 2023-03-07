import React, { FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import Layout from './page_content';
import * as styles from "../styles/subpage.module.css"

interface VideoProps {
    videoSrcURL: string;
    videoTitle: string;

}

const Video = ({ videoSrcURL, videoTitle }: VideoProps) => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    let bottomPadding = isTabletOrMobile ? 8 : 40
    console.log(`isTabletOrMobile ${isTabletOrMobile}`)
    return (
        <div
            style={{
                paddingBottom: `${bottomPadding}px`,

            }}
        >
            <iframe
                src={videoSrcURL}
                title={videoTitle}
                allowFullScreen />
        </div>
    );
}

const MusicBody: FC = () => {
    return <Layout>
        <div className={styles.subpage}>
            <h2>Music</h2>
            <h3>Roots Americana, Folk and Traditional Country</h3>
            <Video videoSrcURL='https://www.youtube.com/embed/ZW3df6Z-eFU' videoTitle="Moanin' the Blues"></Video>
            <Video videoSrcURL="https://www.youtube.com/embed/Em6ZJyD58K8" videoTitle="Blackest Crow"></Video>
            <Video videoSrcURL="https://www.youtube.com/embed/N8U6DdONxSk" videoTitle="Sittin on top of the world"></Video>
            <Video videoSrcURL="https://www.youtube.com/embed/EVUyzoDxw6g" videoTitle="Shady Grove"></Video>
            <Video videoSrcURL="https://www.youtube.com/embed/_xH3AvlFlBo" videoTitle="Folsom Prison Blues"></Video>
            <Video videoSrcURL="https://www.youtube.com/embed/ebwpye7kTt0" videoTitle="Paradise"></Video>
        </div>
    </Layout>
}
export default MusicBody;