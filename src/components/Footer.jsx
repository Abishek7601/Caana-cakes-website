import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {

    const scrollToSection = (sectionId) => {
        if (window.location.pathname !== "/") {
            window.location.href = `/#${sectionId}`;
            return;
        }

        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <footer className="footer">

            {/* ==========================================
                FOOTER MAIN
            ========================================== */}

            <div className="footer-main">

                {/* BRAND */}

                <div className="footer-brand">

                    <Link to="/" className="footer-logo">
                        Caana <span>Cakes</span>
                    </Link>

                    <p>
                        Handcrafted cakes, rich brownies and
                        freshly baked cookies made with love
                        for your sweetest moments.
                    </p>

                    <div className="footer-socials">

                        <a
                            href="https://wa.me/917092191231"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="WhatsApp"
                        >
                            WA
                        </a>

                        <a
                            href="tel:+917092191231"
                            aria-label="Call"
                        >
                            ☎
                        </a>

                        <a
                            href="mailto:YOUR EMAIL ADDRESS"
                            aria-label="Email"
                        >
                            @
                        </a>

                    </div>

                </div>


                {/* QUICK LINKS */}

                <div className="footer-column">

                    <h3>
                        Quick Links
                    </h3>

                    <button
                        type="button"
                        onClick={() =>
                            scrollToSection("home")
                        }
                    >
                        Home
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            scrollToSection("cakes")
                        }
                    >
                        Cakes
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            scrollToSection("brownies")
                        }
                    >
                        Brownies
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            scrollToSection("cookies")
                        }
                    >
                        Cookies
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            scrollToSection("contact")
                        }
                    >
                        Contact
                    </button>

                </div>


                {/* OUR TREATS */}

                <div className="footer-column">

                    <h3>
                        Our Treats
                    </h3>

                    <button
                        type="button"
                        onClick={() =>
                            scrollToSection("cakes")
                        }
                    >
                        Premium Cakes
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            scrollToSection("brownies")
                        }
                    >
                        Rich Brownies
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            scrollToSection("cookies")
                        }
                    >
                        Fresh Cookies
                    </button>

                    <Link to="/order">
                        Place an Order
                    </Link>

                </div>


                {/* CONTACT */}

                <div className="footer-column footer-contact">

                    <h3>
                        Get in Touch
                    </h3>

                    <p>
                        📞
                        <a href="tel:+917092191231">
                            +91 70921 91231
                        </a>
                    </p>

                    <p>
                        💬
                        <a
                            href="https://wa.me/917092191231"
                            target="_blank"
                            rel="noreferrer"
                        >
                            WhatsApp Us
                        </a>
                    </p>

                    <p>
                        ✉
                        <a href="mailto:YOUR EMAIL ADDRESS">
                            YOUR EMAIL ADDRESS
                        </a>
                    </p>

                    <p>
                        📍
                        <a href="https://www.google.com/maps/place/Best+Students+Club/@8.3581968,77.2294085,17z/data=!3m1!4b1!4m6!3m5!1s0x3b045483823d5ff1:0xa9223e0c2e4d11f9!8m2!3d8.3581915!4d77.2319834!16s%2Fg%2F11hbg9ys3g?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D">
                            YOUR SHOP ADDRESS
                        </a>
                    </p>

                </div>

            </div>


            {/* ==========================================
                ORDER CTA
            ========================================== */}

            <div className="footer-cta">

                <div>

                    <span>
                        ✦ SWEET MOMENTS AWAIT ✦
                    </span>

                    <h2>
                        Ready to make your
                        <em> celebration sweeter?</em>
                    </h2>

                </div>

                <Link
                    to="/order"
                    className="footer-order-btn"
                >
                    Order Now →
                </Link>

            </div>


            {/* ==========================================
                FOOTER BOTTOM
            ========================================== */}

            <div className="footer-bottom">

                <p>
                    © {new Date().getFullYear()} Caana Cakes.
                    All rights reserved.
                </p>

                <p>
                    Made with ❤️ for sweet moments.
                </p>

            </div>

        </footer>
    );
}

export default Footer;