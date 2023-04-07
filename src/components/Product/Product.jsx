import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({phone}) => {
    const {brand, phone_name, image, slug}=phone;
    const price = slug.split('-')[1];
    console.log(phone)
    return (
        <div className='pt-5 bg-blue-100  border border-orange-500 rounded-xl flex flex-col relative'>
            <img className='mx-auto' src={image} alt="" />
            <div className='mb-10 mt-3 p-5'>
            <h3 className='text-lg font-medium'>Phone Name: {phone_name}</h3>
            <h3 className='text-lg font-semibold
            '>Brand: {brand}</h3>
            <p className='text-xl font-semibold
            '>Price: {price}</p>
            </div>
            <button className='p-2 rounded-b-xl bg-orange-600 absolute bottom-0 w-full text-white text-lg font-medium'>
                Add to cart  
                <FontAwesomeIcon  style={{marginLeft:'10px'}} icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;