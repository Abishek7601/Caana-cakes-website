import Cakes from "../pages/Cakes";
import Brownies from "../pages/Brownies";
import Cookies from "../pages/Cookies";
import Contact from "./Contact";
import "./Hero.css";

function Hero() {
    return (
        <main className="home-page">

            {/* ================= HERO ================= */}
            <section className="hero-section" id="home">

                <div className="hero-background-shape hero-shape-one"></div>
                <div className="hero-background-shape hero-shape-two"></div>

                <div className="hero-container">

                    {/* LEFT CONTENT */}
                    <div className="hero-content">

                        <div className="hero-badge">
                            <span>✦</span>
                            HANDCRAFTED WITH LOVE
                            <span>✦</span>
                        </div>

                        <h1>
                            Sweet Moments
                            <br />
                            <span>Made Delicious.</span>
                        </h1>

                        <p className="hero-description">
                            Discover beautifully handcrafted cakes, rich brownies
                            and freshly baked cookies made specially for your
                            sweetest celebrations.
                        </p>

                        <div className="hero-buttons">
                            <a href="#cakes" className="hero-primary-btn">
                                Explore Our Cakes
                                <span>→</span>
                            </a>

                            <a href="#contact" className="hero-secondary-btn">
                                Contact Us
                            </a>
                        </div>

                        <div className="hero-features">

                            <div className="hero-feature">
                                <div className="feature-icon">🎂</div>
                                <div>
                                    <strong>Freshly Baked</strong>
                                    <span>Every single day</span>
                                </div>
                            </div>

                            <div className="hero-feature-divider"></div>

                            <div className="hero-feature">
                                <div className="feature-icon">❤️</div>
                                <div>
                                    <strong>Made With Love</strong>
                                    <span>Premium ingredients</span>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="hero-visual">

                        <div className="hero-glow"></div>

                        <div className="hero-image-frame">

                            <div className="hero-image-decoration decoration-one">
                                ✦
                            </div>

                            <div className="hero-image-decoration decoration-two">
                                ✧
                            </div>

                            <img
                                src="/images/caana logo.jpeg"
                                alt="Caana Cakes"
                                className="hero-logo"
                            />

                        </div>

                        <div className="hero-floating-card hero-card-one">
                            <span className="floating-icon">🎂</span>
                            <div>
                                <strong>Premium Cakes</strong>
                                <small>Made for celebrations</small>
                            </div>
                        </div>

                        <div className="hero-floating-card hero-card-two">
                            <span className="floating-star">★</span>
                            <div>
                                <strong>4.9</strong>
                                <small>Customer Rating</small>
                            </div>
                        </div>

                    </div>

                </div>

                {/* BOTTOM STATS */}
                <div className="hero-stats">

                    <div className="hero-stat">
                        <strong>100%</strong>
                        <span>Fresh Ingredients</span>
                    </div>

                    <div className="hero-stat">
                        <strong>20+</strong>
                        <span>Delicious Varieties</span>
                    </div>

                    <div className="hero-stat">
                        <strong>4.9★</strong>
                        <span>Happy Customers</span>
                    </div>

                    <div className="hero-stat">
                        <strong>5 KM+</strong>
                        <span>Home Delivery</span>
                    </div>

                </div>

            </section>

            {/* ================= PRODUCTS ================= */}

            <Cakes />

            <Brownies />

            <Cookies />

            <Contact />

        </main>
    );
}

export default Hero;