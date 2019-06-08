import React from 'react';
const ProductFunktyjny = ({name, onBuyClick, id, promo}) => {

    const handleClick = () => {
        onBuyClick(id);
    }
    
        let style={fontWeight: 900};
        return(
            <div>
                <span>
                {
                    promo 
                    ? 
                    <span style={style}>
                        {name}
                     </span>
                    : 
                    <span >
                        {name}

                    </span>
                }
                </span>
                <button 
                    onClick={handleClick}>
                    Buy
                </button>
            </div>
        )
}
export default ProductFunktyjny;