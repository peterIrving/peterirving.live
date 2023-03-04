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
    let bottomPadding = isTabletOrMobile ? 16 : 80
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

const TuneBody: FC = () => {
    return <Layout>
        <div className={styles.subpage}>
            <h2>Tunes</h2>
            <h3>A Funky Application of Folk Music</h3>
            <Video videoSrcURL="https://www.youtube.com/embed/N8U6DdONxSk" videoTitle="Sittin on top of the world"></Video>
            <Video videoSrcURL="https://www.youtube.com/embed/ebwpye7kTt0" videoTitle="Sittin on top of the world"></Video>
            <Video videoSrcURL="https://www.youtube.com/embed/_xH3AvlFlBo" videoTitle="Sittin on top of the world"></Video>
        </div>
    </Layout>
}
export default TuneBody;