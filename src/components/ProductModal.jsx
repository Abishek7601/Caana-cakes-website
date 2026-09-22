import { useEffect, useState } from "react";
import "./ProductModal.css";
import { useNavigate } from "react-router-dom";

function ProductModal({ product, onClose }) {

    const navigate = useNavigate();

    const [selectedWeight, setSelectedWeight] = useState("one");

    useEffect(() => {
        setSelectedWeight("one");
    }, [product]);

    if (!product) {
        return null;
    }

    const weights = [
        {
            label: "½ KG",
            value: "half",
        },
        {
            label: "1 KG",
            value: "one",
        },
        {
            label: "1.5 KG",
            value: "oneHalf",
        },
        {
            label: "2 KG",
            value: "two",
        },
    ];

    const selectedPrice =
        product.prices[selectedWeight];

    const getWeightLabel = () => {

        if (selectedWeight === "half") {
            return "½ KG";
        }

        if (selectedWeight === "one") {
            return "1 KG";
        }

        if (selectedWeight === "oneHalf") {
            return "1.5 KG";
        }

        if (selectedWeight === "two") {
            return "2 KG";
        }

        return "1 KG";
    };


    const handleOrder = () => {

        const orderData = {
            productType: "Cake",

            productName: product.name,

            cakeName: product.name,

            weight: getWeightLabel(),

            price: selectedPrice,
        };

        console.log(
            "Cake Order Data:",
            orderData
        );

        navigate("/order", {
            state: orderData,
        });

        onClose();
    };


    return (

        <div className="modal-overlay">

            <div className="product-modal">

                {/* CLOSE BUTTON */}

                <button
                    className="modal-close"
                    onClick={onClose}
                    type="button"
                >
                    ✕
                </button>


                {/* IMAGE */}

                <div className="modal-image">

                    <img
                        src={product.image}
                        alt={product.name}
                    />

                </div>


                {/* CONTENT */}

                <div className="modal-content">

                    <p className="modal-category">
                        ✦ PREMIUM CAKE ✦
                    </p>


                    <h2>
                        {product.name}
                    </h2>


                    <div className="modal-rating">
                        ⭐ {product.rating}
                    </div>


                    <p className="modal-description">
                        {product.description}
                    </p>


                    {/* WEIGHT */}

                    <div className="weight-section">

                        <h4>
                            Choose Weight
                        </h4>


                        <div className="weight-options">

                            {weights.map((weight) => (

                                <button
                                    key={weight.value}
                                    type="button"
                                    className={
                                        selectedWeight ===
                                        weight.value
                                            ? "weight-btn active"
                                            : "weight-btn"
                                    }
                                    onClick={() =>
                                        setSelectedWeight(
                                            weight.value
                                        )
                                    }
                                >
                                    {weight.label}
                                </button>

                            ))}

                        </div>

                    </div>


                    {/* PRICE */}

                    <div className="modal-price">

                        ₹{selectedPrice}

                        <span>
                            /{getWeightLabel()}
                        </span>

                    </div>


                    {/* ORDER BUTTON */}

                    <button
                        className="modal-order-btn"
                        type="button"
                        onClick={handleOrder}
                    >
                        🛒 Order Now
                    </button>

                </div>

            </div>

        </div>

    );
}

export default ProductModal;