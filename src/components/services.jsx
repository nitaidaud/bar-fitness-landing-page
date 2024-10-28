
export default function Services() {
    const services = [
        {
            title: 'אימון בהתאמה אישית',
            description: 'תוכנית אימון שפשוט תסדר את כל הפרופורציות בגוף.'
        },
        {
            title: 'תפריט מקצועי',
            description: 'תפריט שיחטב ויעצב אתכם ופשוט יתאים לכם כמו כפפה לחיים שלכם.'
        },
        {
            title: 'מעקב צמוד',
            description: 'מעקב שבועי אחרי השקילות וההתקדמות שלכם.'
        },
        {
            title: 'ייעוץ תזונתי',
            description: 'ליווי צמוד שלי במהלך היום לכל שאלה בלחם התנהלות ביציאות או מצבים שנתקעתם בלי שהתארגנתם מראש על ארוחות.'
        }
    ]

    return (
        <section id="services" className="py-16 bg-navy fade-in">
            <div className="container mx-auto px-4">
                <h2 className="text-6xl font-bold mb-12 text-center">מה מקבלים אצלי</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-balance">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
