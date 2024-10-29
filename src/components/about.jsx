export default function About() {
    return (
        <section id="about" className="py-16 about-section bg-gray-800 fade-in animate__animated">
            <div className=" mx-auto">
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
                        className="w-full lg:w-4/5 rounded-lg shadow-xl mx-4"
                        src="Videos/barVid.mp4"
                        autoPlay
                        loop
                        muted
                    />
                </div>
            </div>
        </section>
    )
}