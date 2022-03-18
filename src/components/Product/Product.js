import React from 'react';
import MyModal from '../Modal/Modal';
import './Product.css'

const Product = (props) => {

    const { title, image, price, category, description } = props.product;

    return (
        <div data-aos="flip-left" className='col-12 col-lg-4 '>
            <div className="card rounded h-100 ">
                <img className='w-50 mx-auto p-2 h-50' src={image} alt="" />
                <h5 className='p-1'> {title}</h5>
                <h6 className='p-1'>Price: {price}$</h6>
                <p>Product Category: {category}</p>
                <p className='p-2 text-start'>{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>

                <div className='d-flex justify-content-around p-3'>
                    <button onClick={props.setCount} className='btn btn-info mb-2 p-2 text-white fw-normal'>Add to cart</button>

                    <button className='btn btn-info mb-2 p-2 text-white fw-normal'>Delate</button>

                    <MyModal product={props.product}></MyModal>
                </div>
            </div>
        </div>
    );
};

export default Product;