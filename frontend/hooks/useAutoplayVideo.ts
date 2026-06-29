import { useEffect, RefObject } from "react";

export function useAutoplayVideo(videoRef: RefObject<HTMLVideoElement | null>) {
    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null;
        const video = videoRef.current;
        if (!video) return;

        const schedulePlay = (delay = 5000) => {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(playStar, delay);
        };

        async function playStar() {
            if (!video) return;
            try {
                video.currentTime = 0;
                await video.play();
            } 
            catch (e) {
                schedulePlay(5000);
            }
        }

        const onEnded = () => schedulePlay(5000);
        video.addEventListener("ended", onEnded);
        playStar();

        return () => {
            if (timeout) clearTimeout(timeout);
            video.removeEventListener("ended", onEnded);
        };
    }, []);
}
