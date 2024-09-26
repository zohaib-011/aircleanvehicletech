import TeachnalogyItem from "./technalogyItem";
import React, { useEffect, useRef, useState } from 'react';

const Teachnalogy = () => {
  const videoRefs = useRef([]); // Array to hold multiple video refs
  const [playingIndex, setPlayingIndex] = useState(null); // Track the currently playing video index

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = videoRefs.current.indexOf(entry.target);
          const player = entry.target.player; // Use the YouTube Player API instance

          if (entry.isIntersecting) {
            // If the video is in view
            if (playingIndex !== index) {
              // Stop the previously playing video
              if (playingIndex !== null && videoRefs.current[playingIndex]) {
                videoRefs.current[playingIndex].player.pauseVideo(); // Pause the previous video
              }
              // Play the current video
              player.playVideo(); 
              setPlayingIndex(index); // Update the currently playing index
            }
          } else {
            // If the video goes out of view, pause it
            if (player) {
              player.pauseVideo();
            }
          }
        });
      },
      {
        threshold: 0.5, // Video should be 50% visible before starting
      }
    );

    // Load the YouTube API script
    const loadYouTubeAPI = () => {
      if (window.YT) return; // Avoid loading the API multiple times
      const script = document.createElement('script');
      script.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(script);
    };

    loadYouTubeAPI();

    window.onYouTubeIframeAPIReady = () => {
      // Create YouTube players for each iframe
      videoRefs.current.forEach((video, index) => {
        if (video) {
          // Set the src attribute for the video iframe
          video.setAttribute('src', video.getAttribute('data-src'));
          video.player = new window.YT.Player(video, {
            events: {
              onReady: () => observer.observe(video), // Start observing the video once it is ready
              onStateChange: (event) => {
                if (event.data === window.YT.PlayerState.ENDED) {
                  setPlayingIndex(null); // Reset playing index when video ends
                }
              }
            }
          });
        }
      });
    };

    return () => {
      // Clean up observer on unmount
      observer.disconnect(); // Disconnect the observer
      videoRefs.current.forEach((video) => {
        if (video) {
          observer.unobserve(video);
        }
      });
    };
  }, [playingIndex]); // Dependency on playingIndex to re-trigger effect when it changes

  return (
    <>
   <iframe width="560" height="315" src="https://www.youtube.com/embed/H6w_rm6GFSE?si=JQDjSv3jcUY4R1fG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div className="video-wrapper">
      <div className="video-wrapper">
        <iframe
          width="90%"
          ref={(el) => (videoRefs.current[0] = el)} // Store reference to this iframe
          data-src="https://www.youtube.com/embed/H6w_rm6GFSE?enablejsapi=1&autoplay=0&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
        <iframe
          width="90%"
          ref={(el) => (videoRefs.current[0] = el)} // Store reference to this iframe
          data-src="https://www.youtube.com/embed/wYhZmplXdJY?enablejsapi=1&autoplay=0&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-wrapper">
        <iframe
          width="90%"
          ref={(el) => (videoRefs.current[1] = el)} // Store reference to this iframe
          data-src="https://www.youtube.com/embed/yE2whqI-lMo?enablejsapi=1&autoplay=0&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="container2">
        <TeachnalogyItem />
        <TeachnalogyItem />
      </div>
    </>
  );
};

export default Teachnalogy;
