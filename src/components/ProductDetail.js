import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const product = useSelector((state) =>
        state.product.products.find((product) => product.id === parseInt(id))
    );

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="small-mini-cart h-100 w-100" key={product.id}>
            <div className="small-mini-cart-image">
                <img src={product.images} alt={product.name} style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="small-mini-cart-right " >
                <p style={{ color: "#222222",paddingTop:'100px' }}>Name :{product.name}</p>
                <p style={{ color: "#222222" }}>Title: {product.title}</p>
                <p style={{ color: "#222222" }}>Price: {product.price}</p>
                <p style={{ color: "#222222" }}>Description: {product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
