import React, { useEffect, useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Optional: Scroll to the video when the component is mounted
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
     
    <div className="video-wrapper">
        <iframe
          ref={videoRef}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wYhZmplXdJY?si=612Y_oVVbE5md-ST&autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-wrapper">
        <iframe
          ref={videoRef}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/H6w_rm6GFSE?si=-Eiw15aQVVy1ALsy&autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-wrapper">
        <iframe
          ref={videoRef}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/f9NyXni8RNg?si=mObejh82uOPmrl_l&autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default VideoPlayer;
