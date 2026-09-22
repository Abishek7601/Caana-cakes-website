import "./ProductCard.css";

function ProductCard({ product, onViewDetails }) {
    return (
        <div className="product-card">

            {/* Product Image */}
            <div className="product-image-container">

                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                />

                {/* Rating */}
                <span className="rating">
                    <span className="rating-star">★</span>
                    {product.rating}
                </span>

            </div>

            {/* Product Information */}
            <div className="product-info">

                <h3>{product.name}</h3>

                <p className="product-description">
                    {product.description}
                </p>

                <div className="product-bottom">

                    <div className="price-info">
                        <span className="starting-text">
                            Starting from
                        </span>

                        <span className="product-price">
                            ₹{getStartingPrice(product)}
                        </span>
                    </div>

                    <button
                        type="button"
                        className="view-btn"
                        onClick={() => onViewDetails(product)}
                    >
                        View Details
                        <span>→</span>
                    </button>

                </div>

            </div>

        </div>
    );
}

/* Get the lowest available price */
function getStartingPrice(product) {

    if (product.prices) {
        const prices = Object.values(product.prices);

        return Math.min(...prices);
    }

    return product.price || 0;
}

export default ProductCard;