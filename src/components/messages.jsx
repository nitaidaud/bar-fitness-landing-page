import { useState, useEffect } from 'react';

export default function Messages() {
    const messagesPics = [
        { url: "Images/chat1.jpg" },
        { url: "Images/chat2.jpg" },
        { url: "Images/chat3.jpg" },
        { url: "Images/chat4.jpg" },
        { url: "Images/chat5.jpg" },
        { url: "Images/chat6.jpg" },
        { url: "Images/chat7.jpg" },
        { url: "Images/chat8.jpg" },
        { url: "Images/chat9.jpg" },
        { url: "Images/chat10.jpg" },
        { url: "Images/chat11.jpg" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance images every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === messagesPics.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, [messagesPics.length]);

    return (
        <section className="relative w-full max-w-4xl mx-auto fade-in">
            {/* Main carousel container */}
            <div className="relative h-64 md:h-96 overflow-hidden">
                {/* Image layers */}
                {messagesPics.map(({ url }, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={url}
                            alt={`Image ${index + 1}`}
                            className={`
                                w-full
                                h-full
                                max-w-fit
                                object-cover
                                mx-auto
                                ${navigator.userAgent.indexOf('Safari') !== -1 && !navigator.userAgent.indexOf('Chrome') !== -1 ? 'p-10 max-w-full' : ''} 
                              `}
                        />
                    </div>
                ))}

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                    {messagesPics.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                ? 'bg-white scale-125'
                                : 'bg-white/50 hover:bg-white/75'
                                }`}
                        >
                            <span className="sr-only">Go to slide {index + 1}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}