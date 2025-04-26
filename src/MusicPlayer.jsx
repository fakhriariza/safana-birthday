import React, { useEffect, useRef } from "react";
import song from "./assets/song.mp3";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set to muted first for autoplay
    // audio.muted = true;
    audio.volume = 1.0;
    audio.loop = true;

    audio
      .play()
      .then(() => {
        console.log("Audio started, unmuting...");
        setTimeout(() => {
          audio.muted = false;
        }, 100); // unmute after a moment
      })
      .catch((e) => {
        console.log("Autoplay blocked, waiting for user interaction:", e);
        // Add fallback on user click
        const unlockAudio = () => {
          audio.play();
          audio.muted = false;
          window.removeEventListener("click", unlockAudio);
        };
        window.addEventListener("click", unlockAudio);
      });

    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
      } else {
        audio.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return <audio ref={audioRef} src={song} />;
}
