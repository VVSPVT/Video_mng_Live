import React, { useState, useEffect, useRef } from 'react';
import './video.css'; // Import your CSS file for styling

// Import the video files
import video1 from '../../public/screen1.mp4';
import video2 from '../../public/screen2.mp4';
import video3 from '../../public/screen3.mp4';
import video4 from '../../public/screen4.mp4';
import video5 from '../../public/screen5.mp4';
import video6 from '../../public/screen6.mp4';
import video7 from '../../public/screen7.mp4';
import video8 from '../../public/screen8.mp4';

const VideoPlayer = ({ videoUrl }) => {
    const videoRef = useRef(null);

    const handleVideoClick = () => {
        const video = videoRef.current;
        if (video) {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }
        }
    };

    return (
        <div className="video-player" onClick={handleVideoClick}>
            <video ref={videoRef} loop autoPlay muted>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

const VideoPlayerRow = ({ videoUrls }) => {
    return (
        <div className="video-row">
            {videoUrls.map((videoUrl, index) => (
                <VideoPlayer key={index} videoUrl={videoUrl} />
            ))}
        </div>
    );
};

const MultiVideoPlayer = ({ showForm }) => {
    const [videos, setVideos] = useState({
        firstRow: [],
        secondRow: []
    });
    const [loading, setLoading] = useState(true); // State variable to track loading state

    useEffect(() => {
        if (showForm) {
            setVideos({
                firstRow: [],
                secondRow: []
            });
            setLoading(true); // Set loading to true when fetching new videos
            console.log("2")
            setTimeout(() => { // Simulating loading delay
                setVideos({
                    firstRow: [video5, video6],
                    secondRow: [video7, video8]
                });
                setLoading(false); // Set loading to false after videos are fetched
            }, 2000); // Adjust the delay time as needed
        } else {
            setVideos({
                firstRow: [video1, video2],
                secondRow: [video3, video4]
            });
            setLoading(false); // Set loading to false when not fetching new videos
            console.log("1")
        }
    }, [showForm]);

    return (
        <div>
            {loading ? ( // Render loader if loading state is true
                <div className="loader">Loading...</div>
            ) : (
                <div className="multi-video-player">
                    <VideoPlayerRow videoUrls={videos.firstRow} />
                    <VideoPlayerRow videoUrls={videos.secondRow} />
                </div>
            )}

            <div className="controls">
                <button className="stream-button"> <i className="fa-solid fa-podcast"></i> Stream</button>
                <div className="logo-buttons">
                    {/* Add your logo buttons here */}
                    <button className="logo-button"></button>
                </div>
                <div className="logo-buttons">
                    <div className='micro'>
                        <i className="fa-solid fa-microphone"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultiVideoPlayer;
