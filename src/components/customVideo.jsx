import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

export default function CustomVideo(url) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef(null);
    const vidPath = url.url
    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(progress);
        }
    };

    const handleSeek = (e) => {
        if (videoRef.current) {
            const newTime = (e.target.value / 100) * videoRef.current.duration;
            videoRef.current.currentTime = newTime;
            setProgress(e.target.value);
        }
    };

    return (
        <div className="relative hover:scale-105 duration-200 w-fit mx-auto">
            <video
                ref={videoRef}
                src={vidPath}
                playsInline
                className="rounded-2xl p-1 bg-primary-dark/70 bg-opacity-30 lg:w-full"
                onTimeUpdate={handleTimeUpdate}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />

            <div className="absolute bottom-10 left-0 right-0 flex items-center gap-4 px-8 play-pause-btn w-full">
                <button
                    onClick={togglePlay}
                    className="p-2 rounded-full bg-primary-dark hover:bg-opacity-80 text-white transition-all duration-300 rotate-180"
                >
                    {isPlaying ? (
                        <Pause className="w-6 h-6" />
                    ) : (
                        <Play className="w-6 h-6" />
                    )}
                </button>

                <input
                    type="range"
                    value={progress}
                    onChange={handleSeek}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    min="0"
                    max="100"
                    step="0.1"
                />
            </div>
        </div>
    );
};