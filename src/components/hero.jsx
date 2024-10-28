
export default function Hero() {
    return (
        <section
            className="hero-image h-screen flex-col flex items-center justify-center text-white bg-cover bg-center  gap-10 snap-start"
        >
            <div className="text-center bg-black/60 p-8 rounded animate__animated animate__fadeIn animate__delay-1s backdrop-blur">
                <h2 className="text-4xl font-bold mb-4">יש לרדת במשקל ויש להתחטב !</h2>
                <p className="mb-6 text-xl">פה אתם תראו איך אפשר לחתוך בשומן אבל גם למלא את הגוף במקומות הנכונים!</p>
                <a href="#contact" className="custom-btn animate__animated animate__pulse animate__infinite">
                    התחל עכשיו
                </a>
            </div>
            {/* <div>
                <p className="text-3xl text-center">מאות גברים ונשים ששינו את החיים שלהם בעזרת הורדת שומן <br /> והוספת מסת שריר במקומות הנכונים.</p>
                <p className="text-3xl text-center"> <span className="underline font-semibold">אצלי</span>  מתעסקים רק בתוצאות !</p>
            </div> */}
        </section>
    )
}
