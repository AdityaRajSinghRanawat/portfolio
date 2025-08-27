import { useRef, useState, useEffect } from "react";

const MusicBox = ({ showMusicBurger }) => {
  
  const backgroundMusicRef = useRef(null);
  const burgerAnimationRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.volume = 0.5; 
      backgroundMusicRef.current.play();
    }
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      backgroundMusicRef.current.pause();
      burgerAnimationRef.current.pause();
    } else {
      backgroundMusicRef.current.play();
      burgerAnimationRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Music Burger */}
      <div
        className="fixed z-50 flex items-center justify-center transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 left-5 sm:left-10"
        onClick={toggleMusic}
        style={
          showMusicBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
      >
        <video
          ref={burgerAnimationRef}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          src="/videos/audio-icon-30fps.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full rounded-full object-cover"
          style={{
            opacity: isPlaying ? 1 : 0.3,
            transition: "opacity 0.3s ease",
          }}
        ></video>
        <audio
          ref={backgroundMusicRef}
          src="/music/website-background-song.mp3"
          loop
          autoPlay
          preload="auto"
          style={{ display: "none" }}
        ></audio>
      </div>
    </>
  );
};

export default MusicBox;
