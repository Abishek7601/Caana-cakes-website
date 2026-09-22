import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { brownies } from "../data/products";
import BrownieModal from "../components/BrownieModal";


function Brownies(){

    const [showAll, setShowAll] = useState(false);

    const [selectedBrownie, setSelectedBrownie] = useState(null);

     const visibleBrownies = showAll
     ? brownies : brownies.slice(0, 6);
    return(
        <>
          <section 
               className="brownies-section"
               id="brownies"
               >

                <div className="section-heading">
                    <p className="section-small-title">
                        ✦ RICH & FUDGY ✦
                    </p>

                    <h2>
                        Delicious Brownies
                    </h2>
                    <p>
                        Rich, fudgy brownies baked with
                        premium ingredients and lots of love.
                    </p>
                </div>

                <div className="products-grid">
                    {visibleBrownies.map((brownie)=>(
                        <ProductCard
                           key={brownie.id}
                           product={brownie}
                           onViewDetails={setSelectedBrownie}
                        />
                    ))}
                </div>

                {brownies.length > 6 &&(
                    <button 
                    className="show-more-btn"
                    onClick={()=> setShowAll(!showAll)}
                    >
                        {showAll
                          ? "Show Less ↑"
                          : "Show More ↓"
                        }
                    </button>
                )}

                {selectedBrownie && (
                    <BrownieModal 
                         
                      product={selectedBrownie}
                      onClose={()=> setSelectedBrownie(null)} />
                )}
            

          </section>
        </>
    );
}
export default Brownies;