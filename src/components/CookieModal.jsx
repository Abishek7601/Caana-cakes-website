import { useEffect, useState } from "react";
import "./CookieModal.css";
import { useNavigate } from "react-router-dom";

function CookieModal({ product, onClose }) {

    const navigate = useNavigate();

    const [selectedWeight, setSelectedWeight] =
        useState("250");


    useEffect(() => {

        setSelectedWeight("250");

    }, [product]);


    if (!product) {
        return null;
    }


    const weights = [

        {
            label: "100g",
            value: "100",
        },

        {
            label: "250g",
            value: "250",
        },

        {
            label: "500g",
            value: "500",
        },

        {
            label: "1 KG",
            value: "1000",
        },

    ];


    const selectedPrice =
        product.prices[selectedWeight];


    const getWeightLabel = () => {

        if (selectedWeight === "1000") {
            return "1 KG";
        }

        return `${selectedWeight}g`;
    };


    const handleOrder = () => {

        navigate("/order", {

            state: {

                productType: "Cookie",

                productName: product.name,

                weight: getWeightLabel(),

                price: selectedPrice,

            },

        });

        onClose();

    };


    return (

        <div className="modal-overlay">

            <div className="product-modal cookie-modal">


                {/* CLOSE */}

                <button
                    className="modal-close"
                    type="button"
                    onClick={onClose}
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
                        ✦ PREMIUM COOKIE ✦
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
                                        selectedWeight === weight.value
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



                    {/* ORDER */}

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

export default CookieModal;