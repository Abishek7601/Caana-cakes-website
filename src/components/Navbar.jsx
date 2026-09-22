import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const goToSection = (sectionId) => {
        setMenuOpen(false);

        if (window.location.pathname === "/") {
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }

            return;
        }

        navigate("/");

        setTimeout(() => {
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 300);
    };

    return (
        <nav className="navbar">

            {/* LOGO */}
            <Link
                to="/"
                className="navbar-logo"
                onClick={() => setMenuOpen(false)}
            >
                <img
                    src="/images/caana logo.jpeg"
                    alt="Caana Cakes Logo"
                />

                <div className="navbar-brand-text">
                    <span className="brand-main">Caana</span>
                    <span className="brand-sub">CAKES</span>
                </div>
            </Link>

            {/* NAVIGATION */}
            <div className={`nav-links ${menuOpen ? "active" : ""}`}>

                <button
                    type="button"
                    className="nav-section-btn"
                    onClick={() => goToSection("home")}
                >
                    Home
                </button>

                <button
                    type="button"
                    className="nav-section-btn"
                    onClick={() => goToSection("cakes")}
                >
                    Cakes
                </button>

                <button
                    type="button"
                    className="nav-section-btn"
                    onClick={() => goToSection("brownies")}
                >
                    Brownies
                </button>

                <button
                    type="button"
                    className="nav-section-btn"
                    onClick={() => goToSection("cookies")}
                >
                    Cookies
                </button>

                <button
                    type="button"
                    className="nav-section-btn"
                    onClick={() => goToSection("contact")}
                >
                    Contact
                </button>

                {/* MOBILE ORDER BUTTON */}
                <Link
                    to="/order"
                    className="mobile-order-btn"
                    onClick={() => setMenuOpen(false)}
                >
                    Order Now
                    <span>→</span>
                </Link>

            </div>

            {/* DESKTOP ORDER BUTTON */}
            <Link
                to="/order"
                className="order-btn"
            >
                Order Now
                <span>→</span>
            </Link>

            {/* MOBILE MENU */}
            <button
                type="button"
                className={`menu-toggle ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

        </nav>
    );
}

export default Navbar;