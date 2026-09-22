import { useState } from "react";
import {cakes} from "../data/products";
import ProductCard from "../components/ProductCard";
import './Cakes.css';
import ProductModal from "../components/ProductModal";
import CustomCakeModal from "../components/CustomCakeModal";

function Cakes(){

    const [showAll, setShowAll] = useState(false);

    const [selectedCake, setSelectedCake] = useState(null);

    const [showCustomCake, setShowCustomCake] = useState(false);

    const visibleCakes = showAll
        ? cakes : cakes.slice(0, 6);
    
    return(
        <>
        <section className="cakes-section" id="cakes">

            <div className="section-heading">

                <p className="section-small-title">
                    ✦ OUR SPECIAL COLLECTION ✦
                </p>
                
                <h2>
                    Delicious Cakes
                </h2>

                <p>
                    Handcrafted cakes made for your 
                    sweetest celebrations.
                </p>

            </div>

            <div className="products-grid">
                {visibleCakes.map((cake)=>(
                   <ProductCard
                   key={cake.id}
                   product={cake}
                   onViewDetails={setSelectedCake}
                   /> 
                ))}
            </div>

            <div className="custom-cake-card">
                <div className="custom-cake-content">
                    <span className="custom-cake-badge">
                        ✦ PERSONALIZED
                    </span>

                    <h3>
                        Create Your 
                        <br />
                        <span>Dream Cake </span>
                    </h3>

                    <p>
                        want something unique?
                        Design your own cake with 
                        your favourite flavour, cream,
                        theme and message.
                    </p>

                    <button className="custom-cake-btn"
                        onClick={()=> setShowCustomCake(true)}
                    >
                        ✨ Create Custom Cake
                    </button>
                </div>

                <div className="custom-cake-decoration">
                    <div className="custom-circle">
                        🎂
                    </div>

                    <span className="sparkle sparkle-one">
                        ✦
                    </span>

                    <span className="sparkle sparkle-two">
                         ✧
                    </span>

                    <span className="sparkle sparkle-three">
                        ✦
                    </span>
                </div>
            </div>

            {cakes.length > 6 &&(
                <button
                   className="show-more-btn"
                   onClick={()=> setShowAll(!showAll)}
                >
                    {showAll ? "Show Less ↑" : "Show More ↓"}

                </button>
            )}
             {selectedCake &&(
            <ProductModal 
                product={selectedCake}
                onClose={()=> setSelectedCake(null)}
            />
            )}

            {showCustomCake &&(
                <CustomCakeModal
                       onClose={()=>setShowCustomCake(false)}
                
                />
            )}
        </section>
         

        </>
    );
}
export default Cakes;