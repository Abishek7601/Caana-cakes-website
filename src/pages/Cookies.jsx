import { useState } from "react";
import { cookies } from "../data/products";
import ProductCard from "../components/ProductCard";
import CookieModal from "../components/CookieModal";
import "./Cookies.css";


function Cookies() {

    const [showAll, setShowAll] = useState(false);

    const [selectedCookie, setSelectedCookie] =
        useState(null);


    const visibleCookies = showAll
        ? cookies
        : cookies.slice(0, 6);


    return (

        <section
            className="cookies-section"
            id="cookies"
        >

            {/* SECTION HEADER */}

            <div className="section-heading">

                <p className="section-small-title">
                    ✦ FRESHLY BAKED ✦
                </p>

                <h2>
                    Delicious Cookies
                </h2>

                <p>
                    Crisp, buttery and delicious cookies
                    baked fresh for every sweet moment.
                </p>

            </div>


            {/* COOKIE PRODUCTS */}

            <div className="products-grid">

                {visibleCookies.map((cookie) => (

                    <ProductCard
                        key={cookie.id}
                        product={cookie}
                        onViewDetails={setSelectedCookie}
                    />

                ))}

            </div>


            {/* SHOW MORE */}

            {cookies.length > 6 && (

                <button
                    className="show-more-btn"
                    type="button"
                    onClick={() =>
                        setShowAll(!showAll)
                    }
                >

                    {showAll
                        ? "Show Less ↑"
                        : "Show More ↓"
                    }

                </button>

            )}


            {/* COOKIE MODAL */}

            {selectedCookie && (

                <CookieModal
                    product={selectedCookie}
                    onClose={() =>
                        setSelectedCookie(null)
                    }
                />

            )}

        </section>

    );
}

export default Cookies;