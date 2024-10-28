import { useState, useEffect, useCallback, useRef } from 'react';

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
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentX, setCurrentX] = useState(0);
    const autoPlayRef = useRef(null);
    const dragThreshold = 50; // Minimum drag distance to trigger slide change

    const moveToNext = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === messagesPics.length - 1 ? 0 : prevIndex + 1
        );
    }, [messagesPics.length]);

    const moveToPrev = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? messagesPics.length - 1 : prevIndex - 1
        );
    }, [messagesPics.length]);

    // Auto-advance images every 5 seconds when not dragging
    useEffect(() => {
        if (!isDragging) {
            autoPlayRef.current = setInterval(moveToNext, 5000);
        }
        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [moveToNext, isDragging]);

    // Touch and mouse event handlers
    const handleDragStart = (e) => {
        setIsDragging(true);
        setStartX(e.type === 'mousedown' ? e.pageX : e.touches[0].pageX);
        setCurrentX(e.type === 'mousedown' ? e.pageX : e.touches[0].pageX);
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
    };

    const handleDragMove = (e) => {
        if (!isDragging) return;
        
        e.preventDefault();
        const x = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
        setCurrentX(x);
    };

    const handleDragEnd = () => {
        if (!isDragging) return;

        const diff = currentX - startX;
        if (Math.abs(diff) > dragThreshold) {
            if (diff > 0) {
                moveToPrev();
            } else {
                moveToNext();
            }
        }
        
        setIsDragging(false);
        setStartX(0);
        setCurrentX(0);
    };

    return (
        <section className="relative w-full max-w-4xl mx-auto fade-in select-none">
            {/* Main carousel container */}
            <div 
                className="relative h-64 md:h-96 overflow-hidden cursor-grab active:cursor-grabbing"
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
            >
                {/* Image layers */}
                {messagesPics.map(({ url }, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 w-full h-full transition-opacity duration-1000 ease-in-out 
                            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
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
                                pointer-events-none
                                select-none
                                ${navigator.userAgent.indexOf('Safari') !== -1 && 
                                  !navigator.userAgent.indexOf('Chrome') !== -1 ? 'p-10 max-w-full' : ''}
                            `}
                            draggable="false"
                        />
                    </div>
                ))}
                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                    {messagesPics.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all 
                                ${index === currentIndex
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