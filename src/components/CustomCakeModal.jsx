import { useEffect, useState } from "react";
import "./CustomCakeModal.css";

function CustomCakeModal({onClose}){

    const [formData, setFormData] = useState({
        customerName: "",
        phone: "",
        flavour: "",
        weight: "1",
        cream: "",
        theme: "",
        occasion: "",
        message: "",
        deliveryDate: "",
        deliveryTime: "",
        address: ""

    });

    const [referenceImage, setReferenceImage] = useState(null);

    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e)=>{
        const {name, value} = e.target;

        setFormData((previous)=>({
            ...previous,
            [name]: value
        }));
    };

    const handleImageChange = (e)=>{
        const file = e.target.files[0];

        if(!file){
            return;
        }

        if(file.size > 5 * 1024 * 1024){
            alert("please select an image below 5MB.");
            e.target.value = "";
            return;
        }

        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/webp"
        ];

        if(!allowedTypes.includes(file.type)){
            alert("Please select JPG, PNG, or WEBP image.");

            e,target.value = "";

            return;
        }
        if(imagePreview){
            URL.revokeObjectURL(imagePreview);
        }

        setReferenceImage(file);

        setImagePreview(URL.createObjectURL(file));
    };

    const removeImage = ()=>{
        if(imagePreview){
            URL.revokeObjectURL(imagePreview);
        }

        setReferenceImage(null);

        setImagePreview(null);
    };

    useEffect(()=>{
        return ()=>{
            if (imagePreview){
                URL.revokeObjectURL(imagePreview);
            }
        };
    }, [imagePreview]);

    const handleSubmit = (e)=>{
        e.preventDefault();

        const whatsappNumber = "917092191231";

        const imageText = referenceImage
        ? referenceImage.name
        : "No reference image uploaded";

        const message = ` 🎂 *CUSTOM CAKE ORDER*

        ━━━━━━━━━━━━━━━━━━
        👤 *CUSTOMER DETAILS*

        Name: ${formData.customerName}
        Phone: ${formData.phone}

        ━━━━━━━━━━━━━━━━━━

        🍰 *CAKE DETAILS*

        Flavour: ${formData.flavour}
        Weight: ${formData.weight} KG
        Cream: ${formData.cream}
        Theme: ${formData.theme}
        Occasion: ${formData.occasion}
        Cake Message: ${formData.message || "No message"}

        ━━━━━━━━━━━━━━━━━━

        📷 *REFERENCE CAKE*

        ${imageText}

        ━━━━━━━━━━━━━━━━━━

        🚚 *DELIVERY DETAILS*

        Delivery Date: ${formData.deliveryDate}

        Delivery Time: ${formData.deliveryTime}

        Address: ${formData.address}

        ━━━━━━━━━━━━━━━━━━
        
       Thank you for choosing our bakery ❤️`;

           const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

           window.open(whatsappURL, "_blank");

        onClose();
        
    };
    return(
        <>
        <div className="custom-modal-overlay"
            onMouseDown={(e)=>{
                if(
                    e.target === e.currentTarget
                ){
                    onClose();

                }
            }}
        >

            <div className="custom-modal">
                <div className="custom-modal-header">
                    <div>
                        <span className="custom-modal-eyebrow">
                            ✦ CUSTOM ORDER
                        </span>
                        <h2>
                            Create Your 
                            <br />
                            <em>Dream Cake </em>
                        </h2>

                        <p>
                            Tell us how you imagine your 
                            perfect cake and we'll bring 
                            it to life. 
                        </p>
                    </div>

                    <button
                         type="button"
                         className="modal-close"
                         onClick={onClose}
                         aria-label="Close"
                    >
                        ×
                    </button>
                </div>

                <form className="custom-cake-form"
                      onSubmit={handleSubmit}
                >

                    <div className="form-group">
                        <label htmlFor="customerName">
                            Your Name 
                        </label>

                        <input type="text" 
                             id="customerName"
                             name="customerName"
                             value={formData.customerName}
                             onChange={handleChange}
                             placeholder="Enter Your Name"
                             required 
                        />
                        </div>

                        <div className="form-group">

                            <label htmlFor="phone">
                                Phone Number 
                            </label>

                            <input
                                 id="phone"
                                 type="tel"
                                 name="phone"
                                 value={formData.phone}
                                 onChange={handleChange}
                                 placeholder="Enter Your Phone Number"
                                 pattern="[0-9]{10}"
                                 maxLength="10"
                                 required
                            />

                        </div>

                         <div className="form-group">
                        
                        <label htmlFor="flavour">
                            Cake Flavour 
                        </label>

                        <select 
                             id="flavour"
                             name="flavour"
                             value={formData.flavour}
                             onChange={handleChange}
                             required
                        >

                            <option value="">
                                Select flavour 
                            </option>

                            <option value="Chocolate">
                                Chocolate 
                            </option>

                            <option value="Vanilla">
                                Vanilla 
                            </option>

                            <option value="Red Velvet">
                                Red Velvet 
                            </option>

                            <option value="Black Forest">
                                Black Forest 
                            </option>

                            <option value="Butterscotch">
                                Butterscotch 
                            </option>

                            <option value="Strawberry">
                                Strawberry 
                            </option>

                        </select>
                    </div>

                    <div className="form-group">

                        <label htmlFor="weight">
                            Cake Weight 
                        </label>

                        <select 
                             id="weight"
                             name="weight"
                             value={formData.weight}
                             onChange={handleChange}
                             required
                        >

                            <option value="0.5">
                                0.5 KG 
                            </option>

                            <option value="1">
                                1KG
                            </option>

                            <option value="1.5">
                                1.5 KG
                            </option>

                            <option value="2">
                                2 KG
                            </option>

                            <option value="2.5">
                                2.5 KG
                            </option>

                            <option value="3">
                                3 KG 
                            </option>

                        </select>

                    </div>

                    <div className="form-group">

                        <label htmlFor="cream">
                            Cream Flavour 
                        </label>

                        <select 
                           id="cream"
                           name="cream"
                           value={formData.cream}
                           onChange={handleChange}
                           required
                        >

                            <option value="">
                                Select Cream
                            </option>

                            <option value="Chocolate">
                                Chocolate 
                            </option>

                            <option value="Vanilla">
                                Vanilla 
                            </option>

                            <option value="Strawberry">
                                Strawberry 
                            </option>

                            <option value="Butterscotch">
                                Butterscotch 
                            </option>

                            <option value="Cream Cheese">
                                Cream Cheese 
                            </option>
                        </select>
                    </div>

                    <div className="form-group">

                        <label htmlFor="theme">
                            Cake Theme 
                        </label>

                        <select
                            id="theme"
                            name="theme"
                            value={formData.theme}
                            onChange={handleChange}
                            required
                        >

                            <option value="">
                                Select Theme 
                            </option>

                            <option value="Minimal">
                                Minimal 
                            </option>

                            <option value="Floral">
                                Floral 
                            </option>

                            <option value="Cartoon">
                                Cartoon 
                            </option>

                            <option value="Luxury">
                                Luxury 
                            </option>

                            <option value="Photo Cake">
                                Photo Cake 
                            </option>

                            <option value="Kids Theme">
                                Kids Theme 
                            </option>

                            <option value="Custom Design">
                                Custom Design 
                            </option>
                        </select>

                    </div>

                    <div className="form-group">

                        <label htmlFor="occasion">
                            Ocassion 
                        </label>

                        <select 
                           id="occasion"
                           name="occasion"
                           value={formData.occasion}
                           onChange={handleChange}
                           required
                        >
                            <option value="">
                                Select Occasion 
                            </option>

                            <option value="Birthday">
                                Birthday 
                            </option>

                            <option value="Wedding">
                                Wedding 
                            </option>

                            <option value="Anniversary">
                                Anniversary 
                            </option>

                            <option value="Baby Shower">
                                Baby Shower 
                            </option>

                            <option value="Engagement">
                                Engagement 
                            </option>

                            <option value="Other">
                                Other 
                            </option>

                        </select>

                    </div>

                    <div className="form-group full-width">

                        <label htmlFor="message">
                            Cake Message  
                        </label>

                        <textarea
                             id="message"
                             name="message"
                             value={formData.meesage}
                             onChange={handleChange}
                             placeholder="Example: Happy Birthday Amma ❤️"
                             rows="3"
                             maxLength="100"
                        />

                        <small className="field-hint">
                            Maximum 100 characters 
                        </small>

                    </div>

                    <div className="form-group full-width">

                        <label>
                            Reference Cake Design 
                        </label>

                        <div className="image-upload-box">

                            <input 
                                  type="file"
                                  id="referenceImage"
                                  accept="image/jpeg,image/png,image/webp"
                                  onChange={handleImageChange}
                            />

                            <label className="image-upload-label"
                             htmlFor="referenceImage"
                            >
                                <span className="upload-icon">
                                    📷
                                </span>

                                <strong>
                                    Upload Reference Cake 
                                </strong>

                                <small>
                                    JPG, PNG, or WEBP . Max 5MB 
                                </small>

                            </label>
                        </div>

                        {imagePreview &&(
                            <div className="image-preview">
                                <img
                                   src={imagePreview}
                                   alt="Reference cake preview"
                                />

                                <div className="image-preview-info">

                                    <span>
                                        {referenceImage?.name}
                                    </span>

                                    <button 
                                        type="button"
                                        onClick={removeImage}
                                    >
                                           Remove Image 
                                    </button>

                                </div>
                            </div>
                        )}
                    </div>

                    <div className="form-group">

                        <label htmlFor="deliveryDate">
                            Delivery Date 
                        </label>

                        <input 
                            id="deliveryDate"
                            type="date"
                            name="deliveryDate"
                            value={formData.deliveryDate}
                            onChange={handleChange}
                            min={
                                new Date()
                                .toISOString()
                                .split("T")[0]
                            }
                            required
                        />
                    </div>

                    <div className="form-group">

                        <label htmlFor="deliveryTime">
                            Delivery Time 
                        </label>

                        <input
                            id="deliveryTime"
                            type="time"
                            name="deliveryTime"
                            value={formData.deliveryTime}
                            onChange={handleChange}
                            required

                        /> 
                        
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="address">
                            Delivery Address 
                        </label>

                        <textarea 
                           id="address"
                           name="address"
                           value={formData.address}
                           onChange={handleChange}
                           placeholder="Enter your complete delivery address"
                           rows="3"
                           required
                        />
                    </div>

                    <div className="custom-form-footer">

                        <button
                           type="button"
                           className="cancel-btn"
                           onClick={onClose}
                        >
                              Cancel 
                        </button>

                        <button
                          type="submit"
                          className="custom-submit-btn"
                        >
                            Continue →
                        </button>
                    </div>

                </form>
            </div>

        </div>
        </>
    );
}
export default CustomCakeModal;