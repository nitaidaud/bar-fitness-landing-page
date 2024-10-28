import { useCallback, useEffect, useState, useRef } from "react";

export default function CustomersTest() {
    const images = [
        "Images/before-after/BA1.jpg",
        "Images/before-after/BA2.jpg",
        "Images/before-after/BA3.jpg",
        "Images/before-after/BA4.jpg",
        "Images/before-after/BA5.jpg",
        "Images/before-after/BA6.jpg",
        "Images/before-after/BA7.jpg",
        "Images/before-after/BA8.jpg",
        "Images/before-after/BA9.jpg",
        "Images/before-after/BA10.jpg",
        "Images/before-after/BA11.jpg",
        "Images/before-after/BA12.jpg",
        "Images/before-after/BA13.jpg",
        "Images/before-after/BA14.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const autoPlayRef = useRef(null);
    const dragThreshold = 50; // Minimum drag distance to trigger slide change

    useEffect(() => {
        const updateSlidesCount = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setSlidesToShow(1);
            } else if (width < 1024) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(4);
            }
        };

        updateSlidesCount();
        window.addEventListener('resize', updateSlidesCount);
        return () => window.removeEventListener('resize', updateSlidesCount);
    }, []);

    const augmentedImages = [...images, ...images, ...images];

    const moveToNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setTranslateX(0);
    }, [images.length]);

    const moveToPrev = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setTranslateX(0);
    }, [images.length]);

    // Handle auto-play
    useEffect(() => {
        if (!isDragging) {
            autoPlayRef.current = setInterval(moveToNext, 3000);
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
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
    };

    const handleDragMove = (e) => {
        if (!isDragging) return;
        
        e.preventDefault();
        const currentX = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
        const diff = currentX - startX;
        setTranslateX(diff);
    };

    const handleDragEnd = () => {
        if (!isDragging) return;
        
        setIsDragging(false);
        
        if (Math.abs(translateX) > dragThreshold) {
            if (translateX > 0) {
                moveToPrev();
            } else {
                moveToNext();
            }
        }
        setTranslateX(0);
    };

    return (
        <section id="conversations" className="py-16 bg-gray-900 fade-in select-none">
            <div className="container mx-auto px-4">
                <h2 className="text-6xl font-bold mb-12 text-center text-white">מעקב לקוחות</h2>

                <div className="relative mx-auto w-full overflow-hidden flex justify-center">
                    <div
                        className="mb-5 flex flex-row-reverse touch-pan-y"
                        style={{
                            transform: `translateX(${-100 * (currentIndex / slidesToShow) + (translateX / (window.innerWidth / slidesToShow))}%)`,
                            width: `${(augmentedImages.length * 100) / slidesToShow}%`,
                            transition: isDragging ? 'none' : 'transform 700ms ease-in-out',
                            cursor: isDragging ? 'grabbing' : 'grab'
                        }}
                        onMouseDown={handleDragStart}
                        onMouseMove={handleDragMove}
                        onMouseUp={handleDragEnd}
                        onMouseLeave={handleDragEnd}
                        onTouchStart={handleDragStart}
                        onTouchMove={handleDragMove}
                        onTouchEnd={handleDragEnd}
                    >
                        {augmentedImages.map((image, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 hover:scale-105 duration-150"
                                style={{ width: `calc(100% / ${slidesToShow})` }}
                            >
                                <div className="px-2 lg:flex justify-center lg:w-fit mx-auto">
                                    <img
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full object-contain rounded-lg mx-auto md:h-80 h-96 pointer-events-none"
                                        draggable="false"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700">
                        <div
                            className="h-full bg-primary-dark transition-all duration-1000 ease-linear"
                            style={{
                                width: `${((currentIndex % images.length) / images.length) * 100}%`
                            }}
                        />
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <a href="#contact" className="p-4 bg-primary-dark rounded-md text-lg font-semibold text-white hover:bg-opacity-80 transition duration-200 hover:scale-105">
                        אני רוצה להתחיל שינוי
                    </a>
                </div>
            </div>
        </section>
    );
}