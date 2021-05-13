import React from 'react'
import './Product.css'
import Button from '@material-ui/core/Button';
function Product({id, title, price, rating, image}) {
    return(
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>*</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <Button size="small" color="secondary">Buy Now</Button>
            <Button size="small" color="secondary">Add to Cart</Button>
        </div>
    )
}
export default Product