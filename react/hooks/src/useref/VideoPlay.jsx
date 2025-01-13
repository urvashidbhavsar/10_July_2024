import React, { useRef } from 'react'
import myvideo from '../video/videosong.mp4'

const VideoPlay = () => {
    let videoplay = useRef(null)

    let playvideo = () => {
        videoplay.current.play()
    }
    let pausevideo = () => {
        videoplay.current.pause()
    }
    return (
        <>
            <video width={500} ref={videoplay}>
                <source src={myvideo} type='video/mp4' />
            </video>
            <br />
            <button onClick={playvideo}>Play</button>
            <button onClick={pausevideo}>Pause</button>
        </>
    )
}

export default VideoPlay
