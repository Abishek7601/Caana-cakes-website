import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

import "./BrownieModal.css";

function BrownieModal({product, onClose}){

    const navigate = useNavigate();

    const [selectedWeight, setSelectedWeight] =  useState("250");

    useEffect(()=>{
        setSelectedWeight("250");
    }, [product]);

    if(!product){
        return null;
    }

    const weights = [
        {
            label: "100g",
            value: "100",
        },
        {
            label:"250g",
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

    const selectedPrice = product.prices[selectedWeight];

    const handleOrder = ()=>{
        navigate("/order", {
            state: {
                productType: "Brownie",
                productName: product.name,
                weight: selectedWeight === "1000"
                ? "1 KG"
                : `${selectedWeight}g`,

                price: selectedPrice,
            },
        });
    };
    return(
        <>
          <div className="modal-overlay">
            <div className="product-modal brownie-modal">
                <button
                  className="modal-close"
                  onClick={onClose}
                >
                    ✕
                </button>

                <div className="modal-image">
                    <img
                      src={product.image}
                      alt={product.name}
                    />
                </div>

                <div className="modal-content">
                    <p className="modal-category">
                        ✦ PREMIUM BROWNIE ✦
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

                    <div className="weight-section">
                        <h4>
                            Choose Weight 
                        </h4>

                        <div className="weight-options">
                            {weights.map((weight)=>(
                                <button
                                   key={weight.value}
                                   type="button"
                                   className={
                                       selectedWeight === weight.value
                                       ? "weight-btn active"
                                       : "weight-btn"
                                   }
                                   onClick={()=> 
                                    setSelectedWeight(
                                        weight.value
                                   )}
                                >
                                    {weight.label}

                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="modal-price">
                        ₹{selectedPrice}

                        <span>
                            /
                            {
                                selectedWeight === "1000"
                                ? "1 KG"
                                : `${selectedWeight}g`
                            }
                        </span>
                    </div>

                    <button 
                        className="modal-order-btn"
                        onClick={handleOrder}
                    >
                        🛒 Order Now
                    </button>
                </div>
            </div>
          </div>
        </>
    );
}
export default BrownieModal;