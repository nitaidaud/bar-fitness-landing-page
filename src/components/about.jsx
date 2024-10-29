import { useEffect, useRef } from 'react';

export default function About() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            // Ensure proper attributes are set
            videoRef.current.playsInline = true;
            videoRef.current.setAttribute('playsinline', true);
            videoRef.current.muted = true;
            videoRef.current.setAttribute('muted', '');
            
            // Handle playback
            const playVideo = () => {
                videoRef.current.play().catch(err => {
                    console.log('Video autoplay failed:', err);
                });
            };

            // Play video after a slight delay to avoid iOS issues
            setTimeout(playVideo, 100);

            // Cleanup
            return () => {
                if (videoRef.current) {
                    videoRef.current.pause();
                }
            };
        }
    }, []);

    return (
        <section id="about" className="py-16 about-section bg-gray-800 fade-in animate__animated">
            <div className="mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center w-full lg:w-[86%] gap-14">
                    <div className="flex justify-center w-fit">
                        <img src="Images/barImage.jpeg" alt="מאמן כושר" className="rounded-full w-52" />
                    </div>
                    <div className="text-balance flex flex-col items-start justify-center w-fit gap-4 mx-2 md:mx-0">
                        <div className="bg-gray-700 rounded-2xl py-6 sm:px-6 shadow-lg max-w-2xl transform hover:scale-105 transition-transform duration-300 sm:w-11/12 mx-auto">
                            <p className="text-2xl sm:text-3xl text-center text-white">
                                מאות גברים ונשים ששינו את החיים שלהם בעזרת הורדת שומן
                                <br />
                                והוספת מסת שריר במקומות הנכונים.
                            </p>
                        </div>
                        <div className="bg-primary bg-opacity-70 rounded-2xl p-6 shadow-lg max-w-2xl transform hover:scale-105 transition-transform duration-300 center mx-auto">
                            <p className="text-2xl sm:text-3xl text-center text-white">
                                <span className="underline font-semibold">אצלי</span>
                                {" "}
                                מתעסקים רק בתוצאות !
                            </p>
                        </div>
                    </div>
                </div>
                <div className="video-div flex justify-center mt-24 w-full fade-in py-10">
                    <video
                        ref={videoRef}
                        className="w-full lg:w-4/5 rounded-lg shadow-xl mx-4"
                        src="Videos/barVid.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        onCanPlay={(e) => {
                            e.target.muted = true;
                            e.target.play().catch(err => console.log('Autoplay failed:', err));
                        }}
                    />
                </div>
            </div>
        </section>
    );
}