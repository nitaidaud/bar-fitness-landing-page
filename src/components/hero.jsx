
export default function Hero() {
    return (
        <section
            className="hero-image h-screen flex-col flex items-center justify-center text-white bg-cover bg-center gap-10 snap-start"
        >
            <div className="text-center bg-black/60 py-8 px-4 rounded animate__animated animate__fadeIn animate__delay-1s backdrop-blur mx-8 md:mx-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">יש לרדת במשקל ויש להתחטב !</h2>
                <p className="mb-6 text-base text-balance md:text-xl">פה אתם תראו איך אפשר לחתוך בשומן אבל גם למלא את הגוף במקומות הנכונים!</p>
                <a href="#contact" className="custom-btn animate__animated animate__pulse animate__infinite">
                    להתחיל עכשיו
                </a>
            </div>
        </section>
    )
}
