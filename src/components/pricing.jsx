
export default function Pricing() {
    const plans = [
        {
            title: 'בסיסי',
            price: '₪49',
            features: [
                '2 מפגשי אימון אישי',
                'גישה לשיעורי קבוצות',
                'ייעוץ תזונתי בסיסי'
            ]
        },
        {
            title: 'מתקדם',
            price: '₪99',
            features: [
                '4 מפגשי אימון אישי',
                'גישה לשיעורי קבוצות',
                'ייעוץ תזונתי מותאם אישית'
            ]
        },
        {
            title: 'פרימיום',
            price: '₪149',
            features: [
                '8 מפגשי אימון אישי',
                'גישה לשיעורי קבוצות',
                'ייעוץ תזונתי מתקדם'
            ]
        }
    ]

    return (
        <section id="pricing" className="py-16 bg-navy-light fade-in">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">מחיר תוכניות</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div key={index} className="price-card flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                                <p className="text-3xl font-bold mb-4">{plan.price} לחודש</p>
                                <ul className="mb-6 text-right">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="mb-2">✓ {feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <a href="#contact" className="custom-btn text-center">
                                התחל עכשיו
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
