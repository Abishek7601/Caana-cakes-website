import "./Contact.css";

function Contact() {
    const phoneNumber = "YOUR PHONE NUMBER";
    const whatsappNumber = "YOUR WHATSAPP NUMBER";
    const email = "YOUR EMAIL ADDRESS";
    const address = "YOUR SHOP ADDRESS";

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleWhatsApp = () => {
        const message = encodeURIComponent(
            "Hello Caana Cakes! I would like to know more about your cakes and orders."
        );

        window.open(
            `https://wa.me/${whatsappNumber}?text=${message}`,
            "_blank"
        );
    };

    const handleEmail = () => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <section className="contact-section" id="contact">

            {/* ================= HEADER ================= */}

            <div className="contact-header">
                <p className="contact-eyebrow">
                    ✦ WE'D LOVE TO HEAR FROM YOU ✦
                </p>

                <h2>
                    Get in <em>Touch</em>
                </h2>

                <p className="contact-intro">
                    Have a question, want to place an order, or need a custom
                    cake? We'd love to hear from you.
                </p>
            </div>


            {/* ================= CONTACT CARDS ================= */}

            <div className="contact-grid">

                {/* CALL */}

                <div className="contact-card">
                    <div className="contact-icon">
                        ☎
                    </div>

                    <div className="contact-card-content">
                        <span className="contact-card-label">
                            CALL US
                        </span>

                        <h3>Let's Talk</h3>

                        <p>
                            Have a question about our cakes or orders?
                            Give us a call.
                        </p>

                        <button
                            type="button"
                            className="contact-link"
                            onClick={handleCall}
                        >
                            Call Now <span>→</span>
                        </button>
                    </div>
                </div>


                {/* WHATSAPP */}

                <div className="contact-card">
                    <div className="contact-icon">
                        💬
                    </div>

                    <div className="contact-card-content">
                        <span className="contact-card-label">
                            WHATSAPP
                        </span>

                        <h3>Chat With Us</h3>

                        <p>
                            Send us your requirements and we'll help
                            you choose the perfect cake.
                        </p>

                        <button
                            type="button"
                            className="contact-link"
                            onClick={handleWhatsApp}
                        >
                            Chat Now <span>→</span>
                        </button>
                    </div>
                </div>


                {/* LOCATION */}

                <div className="contact-card">
                    <div className="contact-icon">
                        📍
                    </div>

                    <div className="contact-card-content">
                        <span className="contact-card-label">
                            VISIT US
                        </span>

                        <h3>Our Bakery</h3>

                        <p>
                            {address}
                        </p>

                        <a
                            href="https://www.google.com/maps"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            Get Directions <span>→</span>
                        </a>
                    </div>
                </div>


                {/* EMAIL */}

                <div className="contact-card">
                    <div className="contact-icon">
                        ✉
                    </div>

                    <div className="contact-card-content">
                        <span className="contact-card-label">
                            EMAIL US
                        </span>

                        <h3>Send a Message</h3>

                        <p>
                            For enquiries, collaborations or general
                            questions, send us an email.
                        </p>

                        <button
                            type="button"
                            className="contact-link"
                            onClick={handleEmail}
                        >
                            Email Us <span>→</span>
                        </button>
                    </div>
                </div>

            </div>


            {/* ================= OPENING HOURS ================= */}

            <div className="contact-hours">

                <div className="hours-decoration">
                    ✦
                </div>

                <div className="hours-content">

                    <span className="contact-card-label">
                        OPENING HOURS
                    </span>

                    <h3>We're Here For Your Sweet Moments</h3>

                    <div className="hours-list">

                        <div className="hours-row">
                            <span>Monday – Saturday</span>
                            <strong>Your Shop Timings</strong>
                        </div>

                        <div className="hours-row">
                            <span>Sunday</span>
                            <strong>Your Shop Timings</strong>
                        </div>

                    </div>

                </div>

            </div>


            {/* ================= FINAL CTA ================= */}

            <div className="contact-cta">

                <div className="contact-cta-content">

                    <p className="contact-eyebrow">
                        ✦ MADE WITH LOVE ✦
                    </p>

                    <h2>
                        Something Sweet<br />
                        <em>is Waiting for You</em>
                    </h2>

                    <p>
                        From everyday treats to custom celebration cakes,
                        we're here to make your special moments even sweeter.
                    </p>

                    <a
                        href="/order"
                        className="contact-order-btn"
                    >
                        Order Your Cake <span>→</span>
                    </a>

                </div>

                <div className="contact-cta-decoration">
                    <span>✦</span>
                    <div>🎂</div>
                    <span>✧</span>
                </div>

            </div>

        </section>
    );
}

export default Contact;