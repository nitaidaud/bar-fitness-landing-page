import { useCallback, useEffect, useState } from "react";

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

    useEffect(() => {
        const updateSlidesCount = () => {
            const width = window.innerWidth;
            if (width < 640) { // Mobile
                setSlidesToShow(1);
            } else if (width < 1024) { // Tablet
                setSlidesToShow(2);
            } else { // Desktop
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
    }, [images.length]);

    useEffect(() => {
        const timer = setInterval(moveToNext, 3000);
        return () => clearInterval(timer);
    }, [moveToNext]);

    return (
        <section id="conversations" className="py-16 bg-gray-900 fade-in">
            <div className="container mx-auto px-4">
                <h2 className="text-6xl font-bold mb-12 text-center text-white">מעקב לקוחות</h2>

                <div className="relative mx-auto w-full overflow-hidden flex justify-center">
                    <div
                        className="mb-5 flex flex-row-reverse transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(${-100 * (currentIndex / slidesToShow)}%)`,
                            width: `${(augmentedImages.length * 100) / slidesToShow}%`
                        }}
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
                                        className="w-full object-contain rounded-lg mx-auto md:h-80 h-96"
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
