import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const AllProducts = (props) => {

    const [ products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    return (
        <div className='container mt-5'>
            <div className="d-flex row g-4">
            {
                products.map(product => <Product key={product.id} product={product} setCount={props.setCount}></Product>)
            }
            </div>
        </div>
    );
};

export default AllProducts;