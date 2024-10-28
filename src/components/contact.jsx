import Swal from "sweetalert2";

export default function Contact() {
    const email_secret = import.meta.env.VITE_EMAILSECRET;
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        formData.append("access_key", email_secret);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: "הודעה נשלחה!",
                    text: "ההודעה שלך נשלחה בהצלחה.",
                    confirmButtonText: "סגירה",
                    background: "#333", // Dark background
                    color: "#fff", // Light text color
                    confirmButtonColor: "#555", // Darker confirm button
                });
                e.target.reset();
            } else {
                Swal.fire({
                    icon: "error",
                    title: "שגיאה",
                    text: "אירעה שגיאה, יש לנסות שנית.",
                    confirmButtonText: "סגירה",
                    background: "#333",
                    color: "#fff",
                    confirmButtonColor: "#555",
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "שגיאה",
                text: "אירעה שגיאה בעת שליחת ההודעה, יש לנסות שנית.",
                confirmButtonText: "סגירה",
                background: "#333",
                color: "#fff",
                confirmButtonColor: "#555",
            });
            console.error(error);
        }
    };

    return (
        <section id="contact" className="py-16 fade-in">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">השינוי שלך מתחיל בצעד קטן</h2>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
                    <div className="mb-4 fade-in">
                        <label htmlFor="name" className="block mb-2">שם:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="form-input"
                        />
                    </div>
                    <div className="mb-4 fade-in">
                        <label htmlFor="lastName" className="block mb-2">שם משפחה:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            className="form-input"
                        />
                    </div>
                    <div className="mb-8 fade-in">
                        <label htmlFor="phone" className="block mb-2">טלפון:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="form-input"
                        />
                    </div>
                    <button type="submit" className="custom-btn w-full fade-in">
                        שלח
                    </button>
                </form>
            </div>
        </section>
    );
}
