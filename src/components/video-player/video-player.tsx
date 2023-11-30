import {useEffect, useRef, useState} from 'react';

type VideoPlayerProps = {
  src: string;
  posterSrc: string;
}

function VideoPlayer({src, posterSrc}: VideoPlayerProps) {
  const [, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);


  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let isVideoPlayerMounted = true;

    if (videoRef.current === null) {
      return;
    }

    videoRef.current?.addEventListener('loadeddata', () => {
      if (isVideoPlayerMounted) {
        setIsLoading(false);
      }
    });

    if (isPlaying) {
      videoRef.current?.play();
      return;
    }

    if (videoRef.current) {
      videoRef.current.src = src;
    }

    return () => {
      isVideoPlayerMounted = false;
    };
  }, [isPlaying]);

  return (
    <video muted className="small-film-card__image" width="280" height="175" src={src} poster={posterSrc} ref={videoRef}
      onMouseEnter={() => {
        setIsPlaying(true);
      }}
      onMouseLeave={() => setIsPlaying(false)}
    >
    </video>
  );
}

export default VideoPlayer;
