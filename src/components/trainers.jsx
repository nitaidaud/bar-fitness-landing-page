import CustomVideo from './customVideo';

export default function Trainers() {
    const videos = [
        {
            url: 'Videos/customer1.mp4'
        },
        {
            url: 'Videos/customer2.mp4'
        },
        {
            url: 'Videos/customer3.mp4'
        },
        {
            url: 'Videos/customer4.mp4'
        }
    ];

    return (
        <section id="trainers" className="py-16 bg-navy fade-in">
            <div className="container mx-auto px-4">
                <h2 className="text-6xl font-bold mb-12 text-center">הם היו במקום שלכם</h2>
                <div className="md:grid md:grid-cols-2 2xl:grid-cols-none 2xl:grid-flow-col gap-8 trainers-vids">
                    {videos.map(({ url }, index) => (
                        <div key={index} className="my-10 md:my-0">
                            <CustomVideo url={url} />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <a
                        href="#contact"
                        className="p-4 bg-primary-dark rounded-md mt-16 text-xl font-semibold hover:bg-opacity-80 hover:-translate-y-2 duration-300"
                    >
                        <h2>יאללה אני איתך בזה</h2>
                    </a>
                </div>
            </div>
        </section>
    );
}