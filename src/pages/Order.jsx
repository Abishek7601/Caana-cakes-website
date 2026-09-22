import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cakes, brownies, cookies } from "../data/products";
import "./Order.css";

function Order() {
    const location = useLocation();
    const navigate = useNavigate();

    // ==========================================
    // GET PRODUCT DATA FROM PREVIOUS PAGE
    // ==========================================

    const orderData = location.state || {};

    // ==========================================
    // ALL PRODUCT LISTS
    // ==========================================

    const productLists = {
        Cake: cakes,
        Brownie: brownies,
        Cookie: cookies,
    };

    // ==========================================
    // INITIAL PRODUCT TYPE
    // ==========================================

    const initialProductType = productLists[orderData.productType]
        ? orderData.productType
        : "Cake";

    // ==========================================
    // INITIAL PRODUCT LIST
    // ==========================================

    const initialProducts =
        productLists[initialProductType];

    // ==========================================
    // INITIAL PRODUCT
    // ==========================================

    const initialProduct =
        initialProducts.find(
            (product) =>
                product.name === orderData.productName
        ) || initialProducts[0];

    // ==========================================
    // PRODUCT TYPE STATE
    // ==========================================

    const [productType, setProductType] = useState(
        initialProductType
    );

    // ==========================================
    // PRODUCT STATE
    // ==========================================

    const [selectedProductId, setSelectedProductId] =
        useState(initialProduct?.id || "");

    // ==========================================
    // AVAILABLE PRODUCTS
    // ==========================================

    const availableProducts =
        productLists[productType] || [];

    // ==========================================
    // SELECTED PRODUCT
    // ==========================================

    const selectedProduct =
        availableProducts.find(
            (product) =>
                product.id === Number(selectedProductId)
        ) || availableProducts[0];

    // ==========================================
    // CAKE WEIGHTS
    // ==========================================

    const cakeWeights = [
        {
            value: "half",
            label: "½ KG",
        },
        {
            value: "one",
            label: "1 KG",
        },
        {
            value: "oneHalf",
            label: "1.5 KG",
        },
        {
            value: "two",
            label: "2 KG",
        },
    ];

    // ==========================================
    // BROWNIE / COOKIE WEIGHTS
    // ==========================================

    const brownieCookieWeights = [
        {
            value: "100",
            label: "100g",
        },
        {
            value: "250",
            label: "250g",
        },
        {
            value: "500",
            label: "500g",
        },
        {
            value: "1000",
            label: "1 KG",
        },
    ];

    // ==========================================
    // WEIGHT OPTIONS
    // ==========================================

    const weightOptions =
        productType === "Cake"
            ? cakeWeights
            : brownieCookieWeights;

    // ==========================================
    // GET INITIAL WEIGHT
    // ==========================================

    const getInitialWeight = () => {
        if (!orderData.weight) {
            return productType === "Cake"
                ? "one"
                : "250";
        }

        if (productType === "Cake") {
            const cakeWeightMap = {
                "½ KG": "half",
                "1 KG": "one",
                "1.5 KG": "oneHalf",
                "2 KG": "two",
            };

            return (
                cakeWeightMap[orderData.weight] ||
                "one"
            );
        }

        const smallWeightMap = {
            "100g": "100",
            "250g": "250",
            "500g": "500",
            "1 KG": "1000",
        };

        return (
            smallWeightMap[orderData.weight] ||
            "250"
        );
    };

    // ==========================================
    // WEIGHT STATE
    // ==========================================

    const [selectedWeight, setSelectedWeight] =
        useState(getInitialWeight());

    // ==========================================
    // CUSTOMER FORM DATA
    // ==========================================

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        deliveryDate: "",
        deliveryTime: "",
        address: "",
    });

    // ==========================================
    // GET WEIGHT LABEL
    // ==========================================

    const getWeightLabel = () => {
        const selectedWeightObject =
            weightOptions.find(
                (weight) =>
                    weight.value === selectedWeight
            );

        return (
            selectedWeightObject?.label ||
            (productType === "Cake"
                ? "1 KG"
                : "250g")
        );
    };

    // ==========================================
    // GET SELECTED PRICE
    // ==========================================

    const selectedPrice =
        selectedProduct?.prices?.[selectedWeight] ||
        0;

    // ==========================================
    // PRODUCT TYPE CHANGE
    // ==========================================

    const handleProductTypeChange = (e) => {
        const newType = e.target.value;

        setProductType(newType);

        const newProducts =
            productLists[newType] || [];

        if (newProducts.length > 0) {
            setSelectedProductId(
                newProducts[0].id
            );
        }

        // Reset weight according to product type
        setSelectedWeight(
            newType === "Cake"
                ? "one"
                : "250"
        );
    };

    // ==========================================
    // PRODUCT CHANGE
    // ==========================================

    const handleProductChange = (e) => {
        setSelectedProductId(
            Number(e.target.value)
        );
    };

    // ==========================================
    // WEIGHT CHANGE
    // ==========================================

    const handleWeightChange = (e) => {
        setSelectedWeight(e.target.value);
    };

    // ==========================================
    // CUSTOMER INPUT CHANGE
    // ==========================================

    const handleChange = (e) => {
        const {
            name,
            value,
        } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    // ==========================================
    // UPDATE PRODUCT WHEN COMING FROM MODAL
    // ==========================================

    useEffect(() => {
        if (!orderData.productType) {
            return;
        }

        if (
            !productLists[
                orderData.productType
            ]
        ) {
            return;
        }

        setProductType(
            orderData.productType
        );

        const products =
            productLists[
                orderData.productType
            ];

        const product =
            products.find(
                (item) =>
                    item.name ===
                    orderData.productName
            );

        if (product) {
            setSelectedProductId(
                product.id
            );
        }
    }, [
        orderData.productType,
        orderData.productName,
    ]);

    // ==========================================
    // WHATSAPP ORDER
    // ==========================================

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace this with your actual shop WhatsApp number
        const whatsappNumber =
            "917092191231";

        // ==========================================
        // WHATSAPP MESSAGE
        // ==========================================

        const message = `
🎂 *${productType.toUpperCase()} ORDER*
━━━━━━━━━━━━━━━━━━

🍰 *PRODUCT DETAILS*

Product: ${selectedProduct?.name || "Not selected"}
Weight: ${getWeightLabel()}
Price: ₹${selectedPrice}

━━━━━━━━━━━━━━━━━━

👤 *CUSTOMER DETAILS*

Name: ${formData.name}
Phone: ${formData.phone}

━━━━━━━━━━━━━━━━━━

🚚 *DELIVERY DETAILS*

Delivery Date: ${formData.deliveryDate}
Delivery Time: ${formData.deliveryTime}

Delivery Address:
${formData.address}

━━━━━━━━━━━━━━━━━━

🚚 *HOME DELIVERY*

Home Delivery is available.

Additional delivery charges apply above 5 KM.

━━━━━━━━━━━━━━━━━━

Please confirm my order.

Thank you for choosing us ❤️
`;

        // ==========================================
        // WHATSAPP URL
        // ==========================================

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                message
            )}`;

        // ==========================================
        // OPEN WHATSAPP
        // ==========================================

        window.open(
            whatsappURL,
            "_blank"
        );
    };

    // ==========================================
    // PAGE
    // ==========================================

    return (
        <section className="order-section">

            <div className="order-container">

                {/* =================================
                    HEADER
                ================================= */}

                <div className="order-header">

                    <p>
                        ✦ SWEET MOMENTS ✦
                    </p>

                    <h1>
                        Place Your Order
                    </h1>

                    <span>
                        Tell us where and when you'd
                        like your favourite treat.
                    </span>

                </div>


                {/* =================================
                    PRODUCT SELECTION
                ================================= */}

                <div className="product-selection">

                    <div className="selection-title">

                        <p>
                            ✦ CHOOSE YOUR TREAT ✦
                        </p>

                        <h2>
                            Select Your Product
                        </h2>

                    </div>


                    {/* =================================
                        PRODUCT TYPE
                    ================================= */}

                    <div className="form-group">

                        <label htmlFor="productType">
                            Product Type
                        </label>

                        <select
                            id="productType"
                            value={productType}
                            onChange={
                                handleProductTypeChange
                            }
                        >

                            <option value="Cake">
                                Cake
                            </option>

                            <option value="Brownie">
                                Brownie
                            </option>

                            <option value="Cookie">
                                Cookie
                            </option>

                        </select>

                    </div>

                    <br />


                    {/* =================================
                        PRODUCT
                    ================================= */}

                    <div className="form-group">

                        <label htmlFor="product">
                            Select Product
                        </label>

                        <select
                            id="product"
                            value={
                                selectedProductId
                            }
                            onChange={
                                handleProductChange
                            }
                        >

                            {availableProducts.map(
                                (product) => (

                                    <option
                                        key={
                                            product.id
                                        }
                                        value={
                                            product.id
                                        }
                                    >
                                        {
                                            product.name
                                        }
                                    </option>

                                )
                            )}

                        </select>

                    </div>

                    <br />


                    {/* =================================
                        WEIGHT
                    ================================= */}

                    <div className="form-group">

                        <label htmlFor="weight">
                            Select Weight
                        </label> 

                        <select
                            id="weight"
                            value={
                                selectedWeight
                            }
                            onChange={
                                handleWeightChange
                            }
                        >

                            {weightOptions.map(
                                (weight) => (

                                    <option
                                        key={
                                            weight.value
                                        }
                                        value={
                                            weight.value
                                        }
                                    >
                                        {
                                            weight.label
                                        }
                                    </option>

                                )
                            )}

                        </select>

                    </div>


                    {/* =================================
                        PRICE
                    ================================= */}

                    <div className="order-price-box">

                        <span>
                            Selected Price
                        </span>

                        <strong>
                            ₹{selectedPrice}
                        </strong>

                    </div>

                </div>


                {/* =================================
                    SELECTED PRODUCT
                ================================= */}

                <div className="selected-product-info">

                    <p className="selected-product-label">
                        YOUR SELECTION
                    </p>

                    <h3>
                        {
                            selectedProduct?.name ||
                            "Product not selected"
                        }
                    </h3>

                    <div className="selected-product-details">

                        <span>
                            {productType}
                        </span>

                        <span>
                            {getWeightLabel()}
                        </span>

                        <strong>
                            ₹{selectedPrice}
                        </strong>

                    </div>

                </div>


                {/* =================================
                    ORDER FORM
                ================================= */}

                <form
                    className="order-form"
                    onSubmit={handleSubmit}
                >

                    {/* =================================
                        CUSTOMER NAME
                    ================================= */}

                    <div className="form-group">

                        <label htmlFor="name">
                            Your Name
                        </label>

                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            value={
                                formData.name
                            }
                            onChange={
                                handleChange
                            }
                            required
                        />

                    </div>


                    {/* =================================
                        PHONE
                    ================================= */}

                    <div className="form-group">

                        <label htmlFor="phone">
                            Phone Number
                        </label>

                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            placeholder="Enter Phone Number"
                            value={
                                formData.phone
                            }
                            onChange={
                                handleChange
                            }
                            pattern="[0-9]{10}"
                            maxLength="10"
                            required
                        />

                        <small>
                            Enter a valid
                            10-digit mobile
                            number.
                        </small>

                    </div>


                    {/* =================================
                        DATE + TIME
                    ================================= */}

                    <div className="form-row">

                        {/* DATE */}

                        <div className="form-group">

                            <label htmlFor="deliveryDate">
                                Delivery Date
                            </label>

                            <input
                                id="deliveryDate"
                                type="date"
                                name="deliveryDate"
                                value={
                                    formData.deliveryDate
                                }
                                onChange={
                                    handleChange
                                }
                                min={
                                    new Date()
                                        .toISOString()
                                        .split("T")[0]
                                }
                                required
                            />

                        </div>


                        {/* TIME */}

                        <div className="form-group">

                            <label htmlFor="deliveryTime">
                                Delivery Time
                            </label>

                            <input
                                id="deliveryTime"
                                type="time"
                                name="deliveryTime"
                                value={
                                    formData.deliveryTime
                                }
                                onChange={
                                    handleChange
                                }
                                required
                            />

                        </div>

                    </div>


                    {/* =================================
                        ADDRESS
                    ================================= */}

                    <div className="form-group">

                        <label htmlFor="address">
                            Delivery Address
                        </label>

                        <textarea
                            id="address"
                            name="address"
                            placeholder="Enter complete delivery address"
                            rows="4"
                            value={
                                formData.address
                            }
                            onChange={
                                handleChange
                            }
                            required
                        />

                    </div>


                    {/* =================================
                        DELIVERY INFORMATION
                    ================================= */}

                    <div className="delivery-info">

                        <span className="delivery-icon">
                            🚚
                        </span>

                        <div>

                            <strong>
                                Home Delivery Available
                            </strong>

                            <p>
                                Additional delivery
                                charges apply
                                above 5 KM.
                            </p>

                        </div>

                    </div>


                    {/* =================================
                        CLOSE BUTTON
                    ================================= */}

                    <button
                        type="button"
                        className="close-order-btn"
                        onClick={() =>
                            navigate("/")
                        }
                    >
                        ✕ Close
                    </button>


                    {/* =================================
                        WHATSAPP BUTTON
                    ================================= */}

                    <button
                        className="whatsapp-order-btn"
                        type="submit"
                    >
                        💬 Order via WhatsApp
                    </button>

                </form>

            </div>

        </section>
    );
}

export default Order;